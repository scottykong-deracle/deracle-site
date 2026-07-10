// header.js
document.write(`
<style>
    header { background: #fff; padding: 20px 0; border-bottom: 1px solid #eee; }
    /* nav를 감싸는 컨테이너에 space-between을 주어 로고와 메뉴를 양 끝으로 배치합니다 */
    nav { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    .logo img { height: 35px; }
    nav ul { display: flex; list-style: none; margin: 0; padding: 0; }
    nav ul li { margin-left: 30px; } /* 메뉴 간격 유지 */
    nav ul li a { text-decoration: none; color: #333; font-weight: 500; font-size: 15px; }
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
