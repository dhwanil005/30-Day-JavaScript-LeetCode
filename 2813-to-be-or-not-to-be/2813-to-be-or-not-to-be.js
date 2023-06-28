var expect = function(val) {
    return {
        x : val,
        notToBe : function(key){
            if (this.x === key) {
                throw new Error("Equal");
            }
            return true;
        },
        toBe : function(key){
            if (this.x !== key) {
                throw new Error("Not Equal");
            }
            return true;
        }
    }
};