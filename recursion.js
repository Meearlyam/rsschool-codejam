// recursion = function(tree) {
//
//     let inner = function(node, result) {
//         if(node) {
//             let temp = [];
//             if (node.left && node.right) {
//                 inner(node.left, result);
//                 inner(node.right, result);
//                 temp.push(node.left.value);
//                 temp.push(node.right.value);
//             }
//
//             result.push(temp);
//             return temp;
//             // else if (node.left) {
//             //     temp.push(node.left.value);
//             //     result.push(temp);
//             //     inner(node.left, result);
//             // }
//             // else if (node.right) {
//             //     temp.push(node.right.value);
//             //     result.push(temp);
//             //     inner(node.right, result);
//             // }
//         }
//     };
//
//     let result = [];
//     inner(tree, result);
//     result.push([tree.value]);
//     return result;
// }

recursion = function(tree) {
    let result = [];

    let inner = function(node) {
        let temp = [];

        if(node.left && node.right) {
            let templ = inner(node.left);
            let tempr = inner(node.right);

            let arr = templ.slice().concat(tempr);
            temp = arr.slice();
            result.push(temp);
            return temp;
        }
        //
        temp.push(node.value);

        // result.push(temp);
        return temp;
    };

    inner(tree);

    return result;
};

let tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};

let array = recursion(tree);
console.log(array); // [[100], [90, 120], [70,99,110,130]]