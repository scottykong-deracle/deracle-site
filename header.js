// header.js
document.write(`
<style>
    /* 상단 패딩을 늘려 메뉴를 하단으로 내립니다 */
    header { background: #fff; padding: 30px 0 10px 0; border-bottom: 1px solid #eee; }
    nav { display: flex; align-items: center; width: 100%; }
    
    .logo { margin-left: 50px; }
    .logo img { height: 35px; }
    
    /* 폰트 관련 설정을 제거하여 기본 스타일을 따르도록 합니다 */
    nav ul { display: flex; list-style: none; margin: 0; padding: 0; margin-left: auto; margin-right: 50px; }
    nav ul li { margin-left: 30px; }
    nav ul li a { text-decoration: none; color: #333; }
    nav ul li a:hover { color: #4a6cf7; }
</style>
<header>
    <nav>
        <div class="logo"><a href="index.html"><img src="logo.png" alt="Logo"></a></div>
        <ul>
            <li><a href="#company">Company</a></li>
            <li><a href="#memory">Memory</a></li>
            <li><a href="#solutions">Display</a></li>
            <li><a href="insights.html">Insights</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</header>
`);
