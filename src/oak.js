/**
 * Language: Oak
 * Contributors:
 *   Johannes Wienke <languitar@semipol.de>
 *   Gustavo Reis <gusbemacbe@gmail.com>
 */
module.exports = function (hljs)
{
  const regex = hljs.regex;

  const BUILT_INS = [
    /for (all|any|each|every) meta/,
    /for (all|any|at least one|at most one|each|every|no|some)/,
    /there (are|exist|exists|is)( (an|a|at least one|at most one|no|some))?/,
    /at least one/, /at most one/, /every/, /some/, /no/,
    /is( (a|an))?/,
    /and/, /any/, /define/, /if/, /iff/, /implies/, /in/, /let/, /not/, /of/,
    /on/, /or/, /such that/, /then/, /where/, /with/
  ];

  const KEYWORDS = [
    /assume/, /axiom/, /begin assume/, /by/, /end/, /exit/, /from/, /include/,
    /now/, /proof/, /schema/, /so/, /suppose/, /take/, /tie-in/
  ];

  const LITERALS = [
    /contradiction/, /false/, /free/, /thesis/, /true/
  ];

  return {
    case_insensitive: true,
    contains: [
      hljs.QUOTE_STRING_MODE, // double-quoted strings
      hljs.HASH_COMMENT_MODE, // line comments
      hljs.COMMENT(
        /\/#/, /#\//, // block comments
        {contains: ['self']}, // with nesting
      ),
      {
        className: 'built_in',
        begin: regex.concat(/\b/, regex.either(...BUILT_INS), /\b/)
      },
      {
        className: 'keyword',
        begin: regex.concat(/\b/, regex.either(...KEYWORDS), /\b/)
      },
      {
        className: 'literal',
        begin: regex.concat(/\b/, regex.either(...LITERALS), /\b/)
      },
    ],
    disableAutodetect: true
  }
}