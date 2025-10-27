const listAcronymsRender = [];
/**
 * 
 * @param {string} phrase 
 * @returns 
 */
function generateAcronym(phrase){
  return  phrase.trim().split(' ').reduce((acum,iter)=>acum+=iter[0].toUpperCase(),'');
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
  return listAcronymsRender.push(generateAcronym(phrase));
}





export{addAcronym, listAcronymsRender};

