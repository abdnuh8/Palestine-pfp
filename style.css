:root {
    --primary: #009578;
    --secondary: #2d3436;
    --pal-red: #CE1126;
    --pal-black: #000000;
    --pal-white: #FFFFFF;
    --pal-green: #007A3D;
}

body {
    font-family: 'Segoe UI', system-ui, sans-serif;
    margin: 0;
    padding: 20px;
    background: #f8f9fa;
    text-align: center;
    color: var(--secondary);
}

.container {
    max-width: 800px;
    margin: 0 auto;
}

h1 {
    color: var(--pal-green);
    margin: 20px 0;
    font-size: 2.5em;
}

.subtitle {
    color: var(--pal-red);
    font-size: 1.1em;
    margin-bottom: 30px;
}

.editor {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.preview-wrapper {
    position: relative;
    margin: 20px 0;
}

.preview-container {
    position: relative;
    display: inline-block;
    margin: 20px auto;
}

#canvas {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

#overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    transition: transform 0.3s ease;
}

.overlay-options {
    display: flex;
    gap: 10px;
}

.overlay-thumb {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    cursor: pointer;
    background-size: cover;
    border: 2px solid transparent;
}

.overlay-thumb.active {
    border-color: var(--pal-red);
    transform: scale(1.1);
}

.btn {
    padding: 12px 25px;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 16px;
    transition: transform 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.btn:hover {
    transform: translateY(-2px);
}

.upload-btn {
    background: var(--pal-green);
    color: white;
}

.download-btn {
    background: var(--pal-red);
    color: white;
}

.reset-btn {
    background: var(--secondary);
    color: white;
}

.loading-spinner {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid var(--pal-red);
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
}

.social-share {
    margin: 30px 0;
}

.share-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    margin: 0 5px;
    cursor: pointer;
    color: white;
    font-size: 18px;
}

.twitter { background: #1DA1F2; }
.instagram { background: #E1306C; }
.facebook { background: #1877F2; }

.footer {
    margin-top: 30px;
    font-size: 0.9em;
    color: var(--secondary);
    font-weight: 500;
}
