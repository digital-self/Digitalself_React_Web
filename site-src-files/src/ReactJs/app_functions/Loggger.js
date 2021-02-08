const loggerObject = function (){
    this.log = () => {

    };
};

export function loggger() {
    return new loggerObject();
};
