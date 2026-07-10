// header.js
document.write(`
<style>
    header { background: #fff; padding: 20px 0; border-bottom: 1px solid #eee; }
    /* 중앙 컨테이너(max-width)를 제거하여 좌우 끝 정렬이 가능하게 합니다 */
    nav { display: flex; align-items: center; width: 100%; }
    
    /* 로고는 왼쪽 끝에서 50px 떨어진 위치에 고정 */
    .logo { margin-left: 50px; }
    .logo img { height: 35px; }
    
    /* 메뉴는 margin-left: auto를 사용하여 오른쪽 끝으로 완전히 밀어냅니다 */
    nav ul { display: flex; list-style: none; margin: 0; padding: 0; margin-left: auto; margin-right: 50px; }
    nav ul li { margin-left: 30px; }
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
