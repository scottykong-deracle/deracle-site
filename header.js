// header.js
// 모든 페이지에서 동일한 메뉴바를 생성합니다.
document.write(`
<style>
    /* 헤더 및 네비게이션 스타일 */
    header { 
        position: sticky; 
        top: 0; 
        background: #fff; 
        border-bottom: 1px solid #ececec; 
        display: flex; 
        justify-content: space-between; 
        align-items: center; 
        padding: 18px 50px; 
        z-index: 1000; 
    }
    
    .logo img { 
        height: 48px; 
    }
    
    nav { 
        display: flex; 
        align-items: center; 
    }
    
    nav a { 
        text-decoration: none; 
        color: #333; 
        margin-left: 35px; 
        font-weight: 500; 
        transition: .3s; 
    }
    
    nav a:hover { 
        color: #4a6cf7; 
    }
    
    /* 모바일 대응 (필요시) */
    @media(max-width: 900px) { 
        header { padding: 18px 20px; } 
        nav a { margin-left: 15px; }
    }
</style>

<header>
    <div class="logo">
        <a href="index.html"><img src="logo.png" alt="DERACLE Logo"></a>
    </div>
    <nav>
        <a href="index.html#company">Company</a>
        <a href="index.html#memory">Memory</a>
        <a href="index.html#solutions">Display</a>
        <a href="insights.html">Insights</a>
        <a href="index.html#contact">Contact</a>
    </nav>
</header>
`);
