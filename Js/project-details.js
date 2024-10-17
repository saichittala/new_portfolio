const projectData = {
    mainHeading: "Ricoz",
    subHeading: "Website Design",
    content: "This project involved collaborating with a health and wellness company to revamp their brand image and appeal to a younger, more modern audience. The focus was on creating a clean, minimalist visual aesthetic that conveyed the company's commitment to natural, healthy living.",
    projectDetails: {
        design: ["Website Design", "Branding"],
        timeline: "2022-2023"
    },
    images: [
        "img/sample2.jpg",
        "img/sample.jpg",
        "img/sample2.jpg",
        "img/sample3.jpg",
        "img/sample4.jpg"
    ],
    conclusion: "This project involved collaborating with a health and wellness company to revamp their brand image and appeal to a younger, more modern audience. The focus was on creating a clean, minimalist visual aesthetic that conveyed the company's commitment to natural, healthy living."
};


// Function to populate data
function populateData(data) {
    document.getElementById('main-heading').innerText = data.mainHeading;
    document.getElementById('sub-heading').innerText = data.subHeading;
    document.getElementById('content').innerText = data.content;
    document.getElementById('main-image').src = data.images[0];

    document.getElementById('project-details-heading').innerText = "Project Details";
    document.getElementById('project-detail-1').innerText = "- " + data.projectDetails.design[0];
    document.getElementById('project-detail-2').innerText = "- " + data.projectDetails.design[1];
    document.getElementById('timeline-heading').innerText = "Timeline";
    document.getElementById('timeline').innerText = data.projectDetails.timeline;

    // Populate project content
    const projectContentDiv = document.getElementById('project-content');
    projectContentDiv.innerHTML = data.content.repeat(4); // Adjust as needed

    // Populate images
    document.getElementById('image-1').src = data.images[1];
    document.getElementById('image-2').src = data.images[2];
    document.getElementById('image-3').src = data.images[3];
    document.getElementById('image-4').src = data.images[4];

    document.getElementById('conclusion-heading').innerText = "Conclusion";
    document.getElementById('conclusion').innerText = data.conclusion;
}

// Call the function with the data object
populateData(projectData);
