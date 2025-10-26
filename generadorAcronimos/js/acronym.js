const listAcronymsRender = [];
/**
 * 
 * @param {string} phrase 
 * @returns 
 */
function generateAcronym(phrase){
  return  phrase.split(' ').reduce((acum,iter)=>acum+=iter[0].toLocaleUpperCase(),'');
}
/**
 * 
 * @param {string} phrase 
 * @returns 
 */
function highlightPhrase(phrase){
  return  phrase.split(' ').length>3;
}

function addAcronym(phrase){
  return phrase?generateAcronym(phrase):'';
}




export{generateAcronym,highlightPhrase, addAcronym, listAcronymsRender};

