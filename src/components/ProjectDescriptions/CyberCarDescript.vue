<template>
    <div>
        <p>
            A group project that consisted of developing a miniature vehicle to handle traffic situations in an intersection, 
            using <strong>Raspberry Pi</strong> and a <strong>Beagle Bone</strong> board.
            <br><br>
            The vehicle was trained using our own dataset to train it to recognize other miniature vehicles, 
            then approach and wait at the intersection until other vehicles passed.
            <br><br>
            The user could control the vehicle from an external command line to command the car to go straight, left or right in the intersection, 
            but only if other vehicles that was there before had passed.
        </p>
        <p class="tool-used">Tools Used:
            <br> • <strong>C++</strong>
            <br> • <strong>Machine Learning</strong>
            <br> • <a href="https://www.raspberrypi.com/products/raspberry-pi-4-model-b/" target="_blank"><strong>RASPBERRY PI</strong></a>
            <br> • <a href="https://beagleboard.org/bone" target="_blank"><strong>BEAGLE BONE</strong></a>
            <br> • <a href="https://opencv.org/" target="_blank"><strong>OPENCV</strong></a> (For image recognition)
            <br> • <a href="https://www.docker.com/" target="_blank"><strong>DOCKER</strong></a> (For packaging and uploading code to the hardware)
            <br> • <a href="https://cppmicroservices.org/" target="_blank"><strong>MICRO SERVICES</strong></a>
        </p>
        <br><br>
        <a href="https://github.com/fabianfroding/dit638-cyber-car/tree/master/microservices" target="_blank" class="project-link">
            <i class="fab fa-github"></i>
        </a>
    </div>
</template>