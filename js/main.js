// Functions for each action-command.

function help(){
  return "<h2><span style=\"color:#eb926d;\">Help:</span></h2><table>\
  <tr>\
    <td>all</td>\
    <td>Give me the complete picture</td>\
  </tr>\
  <tr>\
    <td>about</td>\
    <td>What you want to know about me</td>\
  </tr>\
  <tr>\
    <td>contact</td>\
    <td>How to get in touch with me</td>\
  </tr>\
  <tr>\
    <td>links</td>\
    <td>See what links Julen wants you to click on</td>\
  </tr>\
  <tr>\
    <td>skills</td>\
    <td>Get to know how good Julen is at stuff</td>\
  </tr>\
  <tr>\
    <td>cv</td>\
    <td>Download Julen's CV</td>\
  </tr>\
  </tr></table>";
}

function contact(){
  return "<h2><span style=\"color:#cc6666;\">Contact:</span></h2><table>\
  <tr>\
    <td>Email</td>\
    <td><a href=\"mailto:j.a.r.gamboa@gmail.com\">j.a.r.gamboa@gmail.com</a></td>\
  </tr>\
  <tr>\
  </tr></table>";
}

function skills(){
  return "<h2><span style=\"color:#81a2be;\">Programming languages:</span></h2><table>\
  <tr>\
    <td>Python</td>\
    <td>▰▰▰▰▰▰▰▰▰▱ 90%</td>\
  </tr>\
  <tr>\
    <td>R/RStudio/Tidyverse</td>\
    <td>▰▰▰▰▰▰▰▰▰▱ 90%</td>\
  </tr>\
  <tr>\
    <td>GNU Bash (inc. awk/sed/grep/regex)</td>\
    <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>\
  </tr>\
  <tr>\
    <td>SQL (various flavours of)</td>\
    <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>\
  </tr>\
    <td>Perl</td>\
    <td>▰▰▰▰▰▱▱▱▱▱ 50%</td>\
  </tr>\
  <tr>\
    <td>Julia</td>\
    <td>▰▰▰▰▰▱▱▱▱▱ 50%</td>\
  </tr>\
  </tr></table>";
}

function about(){
  return "<p>I am a data scientist and computational biologist with experience delivering complex analytical solutions across both government operations and academic research. My work combines statistical modelling, machine learning, and domain expertise to build robust, scalable pipelines that support real-world decision-making. I have developed and deployed data science models for fraud detection, financial assurance, forecasting, and network risk analysis using technologies such as Python, R, Databricks, Azure DevOps, MLflow, and NLP frameworks like BERT and GPT-2. In parallel, my doctoral research applies advanced sequence modelling, transformer-based embeddings, and multimodal clustering to explore how biological variation drives functional differences across organisms. What motivates me is understanding the underlying processes that generate the data — and designing models that capture that complexity while remaining actionable. I believe interdisciplinary thinking is critical to solving modern data challenges, as it allows me to approach problems from multiple perspectives and design solutions that balance technical rigour with practical impact.</p>";
}

function cv(){
  return "<span style=\"color:#8abeb7;\"><h2>CV:</h2></span><p>\tDownload from <a href=\"src/JGamboa_CV.pdf\" target=\"_blank\" style=\"text-decoration: underline;\">here</a>.</p>";
}

function portfolio(){
  return "<span style=\"color:#8abeb7;\"><h2>Portfolio:</h2></span><p>\tProject:<a href=\"src/credit_risk_analysis_ml_models_report.html\" target=\"_blank\" style=\"text-decoration: underline;\">Sample Credit Risk Analysis</a>.</p>";

}

function credits(){
  return "<p>Built by <a href=\"https://www.github.com/CedArctic\" target=\"_blank\"><i class=\"fab fa-github\"></i> CedArctic</a></p>";
}

function links(){
  return "<span style=\"color: #b5bd68;\"><h2>Links:</h2></span><ul>\
  <li><a href=\"https://www.linkedin.com/in/julio-gamboa/\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i> LinkedIn</a></li>\
  <li><a href=\"https://github.com/evoclock\" target=\"_blank\"><i class=\"fab fa-github\"></i> Github</a></li>\
  </ul>";
}

// Main Function
function commandProcessor(e){

  //Check if the enter key is pressed
  if(e.keyCode == 13){

    //Clear the area where info will be printed
    document.getElementById('injected').innerHTML= "";

    //Get user input
    var txtInput = document.getElementById('txtBox').value;

    //Select what info to print according to command
    if(txtInput == "help"){
      document.getElementById('injected').innerHTML=help();
    }else if (txtInput=="all") {
      document.getElementById('injected').innerHTML=about() + "\n\n\n" + skills() + "\n\n\n" + portfolio() + "\n\n\n" + links() + "\n\n\n" + contact() + "\n\n\n" + cv();
    }else if (txtInput == "about") {
      document.getElementById('injected').innerHTML=about();
    }else if (txtInput == "contact") {
      document.getElementById('injected').innerHTML=contact();
    }else if (txtInput == "cv") {
      document.getElementById('injected').innerHTML=cv();
    }else if (txtInput=="skills") {
      document.getElementById('injected').innerHTML=skills();
    }else if (txtInput=="links") {
      document.getElementById('injected').innerHTML=links();
    }else if (txtInput == "credits") {
      document.getElementById('injected').innerHTML=credits();
    }else{
      document.getElementById('injected').innerHTML = help();
    }

    //Clear input text box
    document.getElementById('txtBox').value= "";
  }
}
