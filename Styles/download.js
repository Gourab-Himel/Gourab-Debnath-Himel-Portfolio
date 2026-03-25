function downloadAllCV() {
    const files = ["images/CV .docx.pdf", "images/Resume.pdf"];

    files.forEach(file => {
        const link = document.createElement("a");
        link.href = file;
        link.download = "";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}