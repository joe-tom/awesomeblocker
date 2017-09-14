
chrome.storage.get(['awesome_blocker'], sites => {
    if (sites[document.location.host]) {
        clearBody()
    }
})



function clearBody {

}