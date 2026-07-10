// header.js 수정본 (메뉴 오른쪽 정렬)
document.write(`
<style>
    header { background: #fff; padding: 15px 50px; border-bottom: 1px solid #eee; }
    nav { display: flex; justify-content: space-between; align-items: center; } /* 이 줄이 메뉴를 오른쪽으로 보냅니다 */
    .logo img { height: 40px; }
    nav ul { display: flex; list-style: none; margin: 0; padding: 0; }
    nav ul li { margin-left: 25px; } /* 메뉴 간 간격 조절 */
    nav ul li a { text-decoration: none; color: #333; font-weight: 500; }
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
