// header.js
const isInsights = window.location.pathname.includes('insights.html');

document.write(`
<style>
    header { 
        background: ${isInsights ? '#0f172a' : '#fff'}; 
        padding: 30px 0 10px 0; 
        border-bottom: 1px solid ${isInsights ? '#334155' : '#eee'}; 
        position: sticky; top: 0; display: flex; justify-content: space-between; align-items: center;
    }
    nav { display: flex; align-items: center; width: 100%; }
    .logo { margin-left: 50px; }
    .logo img { height: 35px; }
    nav ul { display: flex; list-style: none; margin: 0; padding: 0; margin-left: auto; margin-right: 50px; }
    nav ul li { margin-left: 30px; }
    nav ul li a { 
        text-decoration: none; 
        color: ${isInsights ? '#f1f5f9' : '#333'}; 
    }
    nav ul li a:hover { color: #4a6cf7; }
</style>
<header>
    <nav>
        <div class="logo"><a href="index.html"><img src="logo.png" alt="Logo"></a></div>
        <ul>
            <li><a href="index.html#company">Company</a></li>
            <li><a href="index.html#memory">Memory</a></li>
            <li><a href="index.html#solutions">Display</a></li>
            <li><a href="insights.html">Insights</a></li>
            <li><a href="index.html#contact">Contact</a></li>
        </ul>
    </nav>
</header>
`);
