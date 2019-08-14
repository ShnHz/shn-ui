const shnUiRules = {
    //日期规则 yyyy-MM-dd
    rulesDate(val) {
        let format = /^(\d{4})-(\d{2})-(\d{2})$/;
        if (format.test(val)) {
            return true
        } else {
            return false
        }
    }
}

export {
    shnUiRules
}