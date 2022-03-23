// injects 'highlight.js' which highlights the specified 'term' on the page 

function highlight(term1,term2,term3) {

    let codeString1 = "var qry = \"" + term1 + "\";";
    let codeString2 = "var qry = \"" + term2 + "\";";
    let codeString3 = "var qry = \"" + term3 + "\";";
    
    // executes scripts on the page
    // execute codeString statement then callback function 
    chrome.tabs.executeScript(null, {code: codeString1,codeString2,codeString3},

        // call back function runs highlight.js script
        function() { 
            chrome.tabs.executeScript(null, {file: "highlight.js"});
            window.close();
        }
        );
    
    
}

// Chrome extensions do not allow inline Javascript in popups for security reasons.
// Innstead we add a listener for button click, in this case calling 'highlight()'
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("btnHighlight").addEventListener("click", 
        function() {
            let search1 = document.getElementById('searchString1').value;
            let search2 = document.getElementById('searchString2').value;
            let search3 = document.getElementById('searchString3').value;
            if (search1 == '') {
                return;
            }
            if (search2 == '') {
                return;
            }
            if (search3 == '') {
                return;
            }
            highlight(search1,search2,search3);
        })
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("searchAgain").addEventListener("click", 
        function() {
            let searchBar = document.getElementById('searchString1');
            searchBar.style.type = "text";
            alert("work");
            
        })
});

