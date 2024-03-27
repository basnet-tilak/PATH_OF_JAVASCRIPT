
function camelToKebab(str) {
    /**
     *  This line uses a regular expression to find instances 
     *  where a lowercase letter ([a-z]) is followed by an uppercase letter 
     *  or a digit ([A-Z0-9]). It captures these two characters using parentheses () for later use.
     *  The g flag at the end of the regular expression ensures that all occurrences are replaced (not just the first one).
     *  In the replacement string "$1-$2", $1 and $2 refer to the captured groups from the regular expression. So, it replaces the matched pattern with the first captured group followed by a hyphen (-) and then the second captured group.
     *  For example, if the original string is "camelCase123", this line would replace it with "camel-Case123".
     */
	str = str.replace(/([a-z])([A-Z0-9])/g, "$1-$2"); 
    str = str.replace(/([0-9])([a-zA-Z])/g, "$1-$2");
    str = str.replace(/([a-zA-Z])([A-Z])(?=[a-z])/g, "$1-$2");
    str = str.replace(/[\s_]+/g, '-');
    return str.toLowerCase();
}

console.log(camelToKebab('came1StringValuenepal-0'));