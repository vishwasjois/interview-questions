//Staircase program with javascript

/*
* input = integer
*output
*      #
*     ##
*    ###
*   ####
*  #####
* ######
*/


for (var i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '#'.repeat(i));
}
