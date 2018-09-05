function perimetr() {
    const width = parseInt(document.getElementById("width").value);
    const length = parseInt(document.getElementById("length").value);
    //const high = document.getElementById("high").value;
    //var doorsNumber = document.getElementById("doorsNumber").value;
    //var doorsHigh = document.getElementById("doorsHigh").value;
    //var doorsWidth = document.getElementById("doorsWidth").value;
    //var windowsNumber = document.getElementById("windowsNumber").value;
    //var windowsHigh = document.getElementById("windowsHigh").value;
    //var windowsWidth = document.getElementById("windowsWidth").value;
    //var wallThickness = document.getElementById("list").value;
    //var cost = document.getElementById("cost").value;
//var area = ((width + length) * 2 * high) - (doorsNumber * doorsHigh * doorsWidth) - (windowsNumber * windowsHigh * windowsWidth);
//alert(area);
    const area = width * length;
    document.getElementById(area);
    alert(area);
}