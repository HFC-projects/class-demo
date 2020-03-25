export default () => {
    return ({
        port: parseInt(process.env.PORT, 10) || 3000,
        other: {
            otherValue: process.env.SOME_VARIABLE
        }
    });
}