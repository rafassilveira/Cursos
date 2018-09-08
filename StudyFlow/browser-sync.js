browserSync({
    files: ['./Cursos']
});

// Serve files from the app directory
server: "Cursos"

// Serve files from the current directory
server: true

// Serve files from the app directory with directory listing
server: {
    baseDir: "Cursos",
    directory: true
}

// Multiple base directories
//server: ["app", "dist"]