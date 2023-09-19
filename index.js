function introduction(name) {
    return `Hi, my name is ${name}.`
}
introduction("Joe");

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
introductionWithLanguage("Joe", "JavaScript");

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
introductionWithLanguageOptional("Joe");
introductionWithLanguageOptional("Joe", "Python");