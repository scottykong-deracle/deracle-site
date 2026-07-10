// header.js 수정본
document.write(`
<style>
    header { background: #fff; padding: 15px 50px; border-bottom: 1px solid #eee; }
    nav { display: flex; justify-content: space-between; align-items: center; }
    .logo a { font-size: 24px; font-weight: bold; text-decoration: none; color: #333; }
    nav ul { display: flex; list-style: none; margin: 0; padding: 0; }
    nav ul li { margin-left: 20px; }
    nav ul li a { text-decoration: none; color: #333; font-weight: 500; }
    nav ul li a:hover { color: #4a6cf7; }
</style>
<header>
    <nav>
        <div class="logo"><a href="index.html">dERACLE</a></div>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="ssd-solutions.html">SSD</a></li>
            <li><a href="dram-modules.html">DRAM</a></li>
            <li><a href="insights.html">Insights</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
</header>
`);
