<template>
    <div>
        <p>
            A software program that generates a UML class diagram based on Java source code input.
            <br><br>
            The program uses a backend system that distributes the generated diagram to 3 nodes (computers) in a WLAN network, 
            which means that the final visualization will be displayed in all connected nodes simultaneously.
            <br><br>
            The user inputs the IP adresses of the nodes, and then selects a directory containing the target source code.
            The program will then recursively find all Java files and distribute the final diagram to all connected nodes.
            <br><br>
            JavaFX was used to produce the front end for the UI, SrcML to convert source code into XML format, and Graphviz to visualize the UML diagram.
            <br><br>
        </p>
        <p class="tool-used">Tools Used:
            <br> • <strong>JAVA</strong>
            <br> • <a href="https://openjfx.io/" target="_blank"><strong>JAVAFX</strong></a> (For UI)
            <br> • <a href="https://www.srcml.org/" target="_blank"><strong>SCRML</strong></a> (For converting source code to XML)
            <br> • <a href="https://graphviz.org/" target="_blank"><strong>GRAPHVIZ</strong></a> (For generating the UML diagram visualization)
        </p>
        <br><br>
        <a href="https://github.com/noranavas/group4DIT355/tree/master/source-code-modeler/src/sourcecodemodeler" target="_blank" class="project-link">
            <i class="fab fa-github"></i>
        </a>
    </div>
</template>