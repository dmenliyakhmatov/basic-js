module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 1;
        let childDepth = 0;
        arr.forEach(item =>{
            if (Array.isArray(item)) {
                childDepth = Math.max (this.calculateDepth(item), childDepth);
                } 
        })
        depth += childDepth;
        return depth;
    }
};