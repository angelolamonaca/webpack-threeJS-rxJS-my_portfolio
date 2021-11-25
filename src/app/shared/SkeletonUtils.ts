import { Group } from 'three';
import { Object3D } from 'three/src/Three';

export function cloneModel(source: Group): Group {
    const sourceLookup = new Map();
    const cloneLookup = new Map();
    const clone = source.clone();
    parallelTraverse(source, clone, function (sourceNode, clonedNode) {
        sourceLookup.set(clonedNode, sourceNode);
        cloneLookup.set(sourceNode, clonedNode);
    });

    clone.traverse(function (node: any) {
        if (!node.isSkinnedMesh) return;
        const clonedMesh = node;
        const sourceMesh = sourceLookup.get(node);
        const sourceBones = sourceMesh.skeleton.bones;
        clonedMesh.skeleton = sourceMesh.skeleton.clone();
        clonedMesh.bindMatrix.copy(sourceMesh.bindMatrix);
        clonedMesh.skeleton.bones = sourceBones.map(function (bone: any) {
            return cloneLookup.get(bone);
        });
        clonedMesh.bind(clonedMesh.skeleton, clonedMesh.bindMatrix);
    });
    return clone;
}

function parallelTraverse(
    a: Object3D,
    b: Object3D,
    callback: { (sourceNode: any, clonedNode: any): void; (arg0: any, arg1: any): void }
): void {
    callback(a, b);
    for (let i = 0; i < a.children.length; i++) {
        parallelTraverse(a.children[i], b.children[i], callback);
    }
}
