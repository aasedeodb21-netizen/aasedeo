<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>AASEDEO Staff Login</title>
  <style>
    :root{--accent:#1a73e8}
    *{box-sizing:border-box;margin:0;padding:0;}
    body{
      font-family:Segoe UI,Arial,sans-serif;
      background:#f1f5f9;
      display:flex;
      justify-content:center;
      align-items:center;
      height:100vh;
      transition: all 0.3s ease;
    }
    .hidden{display:none;}
    .login-card, .dashboard-card{
      background:#fff;
      padding:32px 28px;
      border-radius:12px;
      box-shadow:0 6px 18px rgba(0,0,0,0.1);
      width:100%;
      max-width:360px;
      text-align:center;
    }
    h1{margin:0 0 8px;font-size:28px;font-weight:700;}
    .colorful-letter{
      display:inline-block;font-weight:700;line-height:1;
      transition: transform 600ms cubic-bezier(.2,.9,.2,1), color 400ms ease;
      will-change: transform, color;user-select:none;
    }
    h2{margin:0 0 20px;font-size:14px;text-align:center;color:#334155;font-weight:700;letter-spacing:2px;position:relative;display:inline-block;}
    h2::after{content:"";display:block;width:40%;margin:6px auto 0;border-bottom:2px solid var(--accent);border-radius:2px;}
    label{display:block;margin:12px 0 6px;text-align:left;font-size:14px;color:#475569}
    input[type="number"],input[type="password"]{
      width:100%;padding:10px;border-radius:6px;border:1px solid #cfd8e3;margin-top:6px;background:#f9fafb;
      box-shadow: inset 2px 2px 4px rgba(0,0,0,0.15), inset -2px -2px 4px rgba(255,255,255,0.7);
      font-size:14px;outline:none;transition:box-shadow 0.2s ease,border-color 0.2s ease;
    }
    input[type="number"]:focus,input[type="password"]:focus{
      border-color:var(--accent);
      box-shadow: inset 1px 1px 3px rgba(0,0,0,0.2), inset -1px -1px 3px rgba(255,255,255,0.6), 0 0 0 2px rgba(26,115,232,0.2);
    }
    button{margin-top:20px;width:100%;padding:12px;background:var(--accent);color:#fff;font-size:15px;font-weight:600;border:none;border-radius:8px;cursor:pointer;box-shadow:0 4px 6px rgba(0,0,0,0.2);transition:background .2s, transform .2s, box-shadow .2s;}
    button:hover{background:#1557b0;transform:translateY(-2px);box-shadow:0 6px 10px rgba(0,0,0,0.25);}
    button:active{transform:translateY(0);box-shadow:0 3px 5px rgba(0,0,0,0.2);}
    .msg{margin-top:12px;font-size:13px;font-weight:500}
    .msg.error{color:#d93025}
    .msg.success{color:#188038}
    .dashboard-card h2{margin-bottom:20px;font-size:18px;color:#111827;letter-spacing:1px;}
    .welcome-user{font-size:15px;font-weight:600;color:#1a73e8;margin-bottom:12px;} /* Blue welcome message */
    .dashboard-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
    .dashboard-grid a{text-decoration:none;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;padding:20px;font-size:14px;font-weight:600;border-radius:8px;text-align:center;}
    .dashboard-grid a i{font-size:24px;}
    .blue{background:#1e3a8a;color:#fff;}
    .green{background:#059669;color:#fff;}
    .brown{background:#7c6a63;color:#fff;}
    .orange{background:#f97316;color:#fff;}
    .purple{background:#6b21a8;color:#fff;}
  </style>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">
</head>
<body>

  <!-- LOGIN CARD -->
  <div class="login-card" id="loginCard">
    <h1 id="animatedTitle">AASEDEO</h1>
    <h2>STAFF LOGIN</h2>
    <form id="loginForm">
      <label for="staffId">Staff ID</label>
      <!-- Updated min/max for 5–10 digits -->
      <input id="staffId" type="number" min="10000" max="9999999999" required placeholder="Enter Staff ID">
      <label for="password">Password</label>
      <input id="password" type="password" autocomplete="off" required placeholder="Enter Password">
      <button type="submit">Login</button>
      <div id="msg" class="msg" aria-live="polite"></div>
    </form>
  </div>

  <!-- DASHBOARD CARD -->
  <div class="dashboard-card hidden" id="dashboardCard">
    <div id="welcomeUser" class="welcome-user"></div>
    <h2>AASE EMIS Dashboard</h2>
    <div class="dashboard-grid">
      <a class="blue" href="https://sites.google.com/view/staff-bio-data/index" target="_blank">
        <i class="fas fa-id-card"></i> Employee Data
      </a>
      <a class="green" href="https://sites.google.com/view/school-enrolment/index" target="_blank">
        <i class="fas fa-user-plus"></i> Enrolment
      </a>
      <a class="brown" href="https://sites.google.com/view/furnituresituation/index" target="_blank">
        <i class="fas fa-couch"></i> Furniture
      </a>
      <a class="orange" href="https://sites.google.com/view/schoolheadsassistants/index" target="_blank">
        <i class="fas fa-user-tie"></i> Headteachers
      </a>
      <a class="purple" href="https://sites.google.com/view/office-staff-bio-data/index" target="_blank">
        <i class="fas fa-briefcase"></i> Office Staff
      </a>
    </div>
  </div>

  <script>
    // Default users
    const defaultUsers = {
      "698149": { password: "D242", name: "MR. BENJAMIN ODURO KWARTENG" },
      "258219": { password: "ATENKA", name: "MR. BENJAMIN AYESU ATENKA" },
      "159254": { password: "SADAT", name: "MR. KENNEDY AMOAKO SADAT" },
      "245205": { password: "RITA", name: "MS. RITA MENSAH" },
      "595149": { password: "JOYCE", name: "MS. JOYCE FOSUAH" },
      "102733": { password: "CHRIS", name: "MR. CHRISTOPHER OWUSU ANSAH" },
      "185618": { password: "FRED", name: "MR. FREDERICK OSEI ASIBEY" },
      "1218856": { password: "KING", name: "MR. KINGSFORD OSEI APPIAH" },
      "900000": { password: "EMIS", name: "HEAD_EMIS", redirect: "https://sites.google.com/view/aase-emis-workspace/index" }
    };

    function loadUsers(){
      const data = localStorage.getItem("users");
      return data ? JSON.parse(data) : {...defaultUsers};
    }
    function saveUsers(users){
      localStorage.setItem("users", JSON.stringify(users));
    }

    let users = loadUsers();

    const msgDiv = document.getElementById('msg');
    const loginCard = document.getElementById('loginCard');
    const dashboardCard = document.getElementById('dashboardCard');
    const welcomeUser = document.getElementById('welcomeUser');

    document.getElementById('loginForm').addEventListener('submit', function(e){
      e.preventDefault();
      msgDiv.textContent=''; msgDiv.className='msg';
      const staffId=document.getElementById('staffId').value.trim();
      const pass=document.getElementById('password').value;

      // Validation: 5–10 digits
      if(!/^\d{5,10}$/.test(staffId)){ 
        msgDiv.classList.add('error');
        msgDiv.textContent='Staff ID must be 5 to 10 digits.'; 
        return;
      }

      const record=users[staffId];
      if(!record){ 
        msgDiv.classList.add('error');
        msgDiv.textContent='Invalid Staff ID.'; 
        return;
      }

      if(pass===record.password){
        msgDiv.classList.add('success');
        msgDiv.textContent=`Welcome, ${record.name}! Redirecting...`;
        setTimeout(() => {
          if(record.redirect){
            window.location.href = record.redirect;
          } else {
            loginCard.classList.add('hidden');
            dashboardCard.classList.remove('hidden');
            welcomeUser.textContent = `Welcome, ${record.name}!`;
          }
        },500);
      } else {
        msgDiv.classList.add('error');
        msgDiv.textContent='Incorrect password.';
      }
    });

    // Animate AASEDEO
    (function setupAnimatedTitle(){
      const title = document.getElementById('animatedTitle');
      const text = title.textContent.trim() || 'AASEDEO';
      title.textContent = '';
      const letters = [];
      for(let ch of text){
        const span = document.createElement('span');
        span.className = 'colorful-letter';
        span.textContent = ch;
        title.appendChild(span);
        letters.push(span);
      }
      function rand(min,max){return Math.random()*(max-min)+min;}
      function randInt(min,max){return Math.floor(rand(min,max+1));}
      function randomColor(){return `hsl(${randInt(0,360)}deg ${randInt(60,95)}% ${randInt(45,65)}%)`;}
      function applyRandomStyles(){
        for(const el of letters){
          const tx=rand(-10,10),ty=rand(-8,8),rot=rand(-20,20),scale=rand(0.88,1.18);
          el.style.color=randomColor();
          el.style.transform=`translate(${tx}px,${ty}px) rotate(${rot}deg) scale(${scale})`;
        }
      }
      function occasionalFlash(){
        const count=randInt(1,Math.min(2,letters.length));
        for(let i=0;i<count;i++){
          const idx=randInt(0,letters.length-1);
          const el=letters[idx];
          el.animate([{ transform: el.style.transform+' scale(1)', opacity: 1 },
                      { transform: el.style.transform+' scale(1.35)', opacity: 1 },
                      { transform: el.style.transform+' scale(1)', opacity: 1 }],
                     { duration: randInt(350,700), easing:'ease-in-out' });
        }
      }
      applyRandomStyles();
      setInterval(()=>{ applyRandomStyles(); if(Math.random()>0.6) occasionalFlash(); },900);
      setInterval(()=>{ 
        for(const el of letters){ el.style.transition='transform 900ms cubic-bezier(.2,.9,.2,1), color 700ms ease'; }
        applyRandomStyles();
        setTimeout(()=>{for(const el of letters){el.style.transition='';}},1000);
      },3700);
      if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
        for(const el of letters){el.style.transition='none'; el.style.animation='none'; el.style.transform='none'; el.style.color=randomColor();}
      }
    })();
  </script>
</body>
</html>
