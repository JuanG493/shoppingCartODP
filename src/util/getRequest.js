const Request = async (url, signal = null) => {
    // console.log("from Request: " + url);
    
    const responde = await fetch(url, { signal });

    if (!responde.ok) {
        throw new Error(`HTTP error: Status ${responde.status}`)
    }
    return responde.json();
}

export default Request;