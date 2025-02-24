function getCompoundInterest() { 
    const investment = parseFloat(document.getElementById("initialInvestment").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const retirementYear = parseInt(document.getElementById("retirementYear").value);
    const currentYear = new Date().getFullYear();
    const years = retirementYear-currentYear;
    let compoundInterest = investment*Math.pow(interestRate/100+1, years);
    document.getElementById("result").textContent = `Your compound interest in ${retirementYear}: $${Math.round(compoundInterest)}`;
        
    return false; 
} 
