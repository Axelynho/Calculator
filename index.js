const inputANode = document.querySelector('.js-input-a');
const inputBNode = document.querySelector('.js-input-b');
const selectOperationNode = document.querySelector('.js-select-operation');
const btnResultANode = document.querySelector('.js-btn-result');
const outputANode = document.querySelector('.js-output');

btnResultANode.addEventListener('click',function(){
    const a = Number(inputANode.value);
    const b = Number(inputBNode.value);
    const operation = selectOperationNode.value;

    const result = calculate ({ a, b, operation });

    outputANode.innerHTML = result;
});
