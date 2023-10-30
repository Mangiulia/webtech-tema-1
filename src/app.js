
const rle = (a, b = true) => {
    if (typeof a !== "string" && !(a instanceof String)) {
        throw new Error("InvalidType");
    }

    if (b) {
        let result = "";
        let count = 1;

        for (let i = 1; i < a.length; i++) {
            if (a[i] === a[i - 1]) {
                count++;
            } else {
                result += a[i - 1] + count;
                count = 1;
            }
        }

        result += a[a.length - 1] + count;

        return result;
    } else {
        let result = "";
        let i = 0;

        while (i < a.length) {
            const char = a[i];
            i++;
            let count = "";

            while (i < a.length && !isNaN(a[i])) {
                count += a[i];
                i++;
            }

            count = count !== "" ? parseInt(count) : 1;

            for (let j = 0; j < count; j++) {
                result += char;
            }
        }

        return result;
    }
};

module.exports = rle;
