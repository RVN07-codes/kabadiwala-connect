const state = {
  screen: "home",
  scrap: { material: "PCB / E-waste", weight: 2.5, condition: "Mixed", price: 0 },
  selectedRecycler: null,
  lotId: "KBC-00127",
  earnings: 8420
};

const recyclers = [
  {name:"EcoRecycle", distance:"6.2 km", rate:850, pickup:true, authorized:true, rating:"4.8"},
  {name:"GreenCycle", distance:"9.4 km", rate:810, pickup:false, authorized:true, rating:"4.6"},
  {name:"ReNew Materials", distance:"12.1 km", rate:790, pickup:true, authorized:true, rating:"4.5"}
];

function money(n){ return "₹" + Number(n).toLocaleString("en-IN"); }
function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)}
function showScreen(screen){
  state.screen=screen;
  render();
  window.scrollTo({top:0,behavior:"smooth"});
}
function navActive(){
  document.querySelectorAll(".bottom-nav button").forEach(b=>b.classList.toggle("active", b.dataset.screen===state.screen));
}

function render(){
  const app=document.getElementById("app");
  const screens={
    home:homeScreen, add:addScrapScreen, identify:identifyScreen, price:priceScreen,
    recyclers:recyclerScreen, lot:lotScreen, handover:handoverScreen,
    success:successScreen, earnings:earningsScreen, lots:lotsScreen,
    profile:profileScreen, notifications:notificationsScreen
  };
  app.innerHTML=(screens[state.screen]||homeScreen)();
  navActive();
}

function homeScreen(){
return `<section class="screen">
  <div class="hero">
    <div class="eyebrow">Kabadiwala Connect</div>
    <h2>Your scrap.<br><span style="color:#087443">Better value.</span></h2>
    <p>Connect with authorized recyclers, discover fair prices and keep every handover traceable.</p>
  </div>

  <div class="earn-card">
    <div><small>Today's estimated earnings</small><div class="money">${money(2450)}</div></div>
    <div class="up">↗ +12%<br><span class="muted small">than yesterday</span></div>
  </div>

  <div class="section-title"><h3>What do you want to do?</h3></div>
  <div class="grid">
    <button class="action primary" onclick="showScreen('add')"><div class="ico">📸</div><strong>Sell Scrap</strong><span>Take a photo, get value & find a recycler</span></button>
    <button class="action" onclick="showScreen('recyclers')"><div class="ico">📍</div><strong>Find Recycler</strong><span>Nearby authorized recycling partners</span></button>
    <button class="action" onclick="showScreen('lots')"><div class="ico">📦</div><strong>My Lots</strong><span>Track scrap handovers</span></button>
    <button class="action" onclick="showScreen('earnings')"><div class="ico">₹</div><strong>My Earnings</strong><span>View income and transaction history</span></button>
  </div>

  <div class="section-title"><h3>Quick info</h3><button onclick="showScreen('earnings')">View all</button></div>
  <div class="quick">
    <div class="stat"><strong>12.5 kg</strong><span>Scrap this week</span></div>
    <div class="stat"><strong>3</strong><span>Transactions</span></div>
    <div class="stat"><strong>28 kg</strong><span>CO₂ saved*</span></div>
  </div>

  <div class="section-title"><h3>Stay safe</h3></div>
  <div class="card">
    <div class="row"><div><strong>⚠️ Battery handling</strong><div class="muted small">Never puncture, burn or dismantle batteries.</div></div><button class="btn secondary" style="width:auto;margin:0" onclick="toast('Safety guide opened')">Listen 🔊</button></div>
  </div>
  <p class="muted small">*Illustrative prototype data for demonstration.</p>
</section>`;
}

function addScrapScreen(){
return `<section class="screen">
  <button class="back" onclick="showScreen('home')">← Back</button>
  <div class="section-title"><h3>Add Scrap</h3></div>
  <div class="scan-box" onclick="showScreen('identify')"><div><div class="scan-icon">📷</div><strong>Take a photo of your scrap</strong><div class="muted small">AI will help identify the material</div><button class="btn" style="width:auto">Open Camera</button></div></div>
  <label class="label">Material</label>
  <select class="input" onchange="state.scrap.material=this.value">
    <option>PCB / E-waste</option><option>Copper Cable</option><option>Aluminium</option><option>Battery</option><option>Mixed Electronic Scrap</option>
  </select>
  <label class="label">Approx. Weight (kg)</label>
  <input class="input" type="number" step="0.1" value="${state.scrap.weight}" onchange="state.scrap.weight=Number(this.value)">
  <label class="label">Condition</label>
  <select class="input"><option>Mixed</option><option>Good</option><option>Damaged</option></select>
  <div class="card" style="margin-top:15px"><div class="row"><span>📍 Location</span><strong>Bhusawal</strong></div></div>
  <button class="btn" onclick="showScreen('identify')">Continue →</button>
</section>`;
}

function identifyScreen(){
return `<section class="screen">
  <button class="back" onclick="showScreen('add')">← Back</button>
  <div class="section-title"><h3>AI Material Identification</h3></div>
  <div class="scan-box">
    <div><div class="scan-icon">🖥️</div><strong>Material identified</strong><p style="margin:8px 0">${state.scrap.material}</p><span class="confidence">94% confidence</span></div>
  </div>
  <div class="card" style="margin-top:14px">
    <div class="row"><span class="muted">Category</span><strong>E-Waste</strong></div>
    <div class="row" style="margin-top:12px"><span class="muted">Weight</span><strong>${state.scrap.weight} kg</strong></div>
    <div class="row" style="margin-top:12px"><span class="muted">Location</span><strong>Bhusawal</strong></div>
  </div>
  <button class="btn" onclick="calculatePrice();showScreen('price')">Confirm & Get Value →</button>
</section>`;
}

function calculatePrice(){
  const base={ "PCB / E-waste":800, "Copper Cable":650, "Aluminium":180, "Battery":120, "Mixed Electronic Scrap":300 }[state.scrap.material]||500;
  state.scrap.price=Math.round(base*state.scrap.weight);
}

function priceScreen(){
  const p=state.scrap.price||2000, low=Math.round(p*.93), high=Math.round(p*1.08);
return `<section class="screen">
  <button class="back" onclick="showScreen('identify')">← Back</button>
  <div class="eyebrow">Price Discovery</div>
  <h2>Estimated fair value</h2>
  <div class="card" style="text-align:center;padding:25px">
    <div class="price">${money(low)} – ${money(high)}</div>
    <p class="muted small">Based on material, weight and illustrative local rates</p>
  </div>
  <div class="card">
    <div class="row"><span class="muted">Material</span><strong>${state.scrap.material}</strong></div>
    <div class="row" style="margin-top:11px"><span class="muted">Weight</span><strong>${state.scrap.weight} kg</strong></div>
    <div class="row" style="margin-top:11px"><span class="muted">Price confidence</span><strong>87%</strong></div>
  </div>
  <div class="warning">⚠️ Offers far below the local range can be flagged as unusual.</div>
  <button class="btn" onclick="showScreen('recyclers')">Compare Recycler Offers →</button>
</section>`;
}

function recyclerCard(r,i){
return `<div class="offer">
  <div class="row"><div><strong>${i===0?"🥇 ":""}${r.name}</strong><div class="muted small">📍 ${r.distance} · ⭐ ${r.rating}</div></div><span class="tag">Authorized</span></div>
  <div class="row" style="margin-top:13px"><strong style="font-size:22px;color:#087443">${money(r.rate)}<span class="muted small">/kg</span></strong><span class="small">${r.pickup?"🚚 Pickup available":"🏪 Drop-off"}</span></div>
  <button class="btn ${i===0?"":"secondary"}" onclick="selectRecycler(${i})">${i===0?"Select Best Offer":"Select Recycler"}</button>
</div>`;
}
function selectRecycler(i){state.selectedRecycler=recyclers[i];showScreen('lot')}

function recyclerScreen(){
return `<section class="screen">
  <button class="back" onclick="showScreen('price')">← Back</button>
  <div class="eyebrow">Smart Matching</div><h2>Find a Recycler</h2>
  <div class="map"><div class="pin">📍</div></div>
  <div class="recycler-list">
    ${recyclers.map(recyclerCard).join("")}
  </div>
</section>`;
}

function lotScreen(){
 const r=state.selectedRecycler||recyclers[0];
return `<section class="screen">
  <button class="back" onclick="showScreen('recyclers')">← Back</button>
  <div class="eyebrow">Traceability</div><h2>Create Digital Lot</h2>
  <div class="card">
    <div class="row"><span class="muted">Lot reference</span><strong class="lot-code">${state.lotId}</strong></div>
    <div class="row" style="margin-top:16px"><span class="muted">Material</span><strong>${state.scrap.material}</strong></div>
    <div class="row" style="margin-top:11px"><span class="muted">Weight</span><strong>${state.scrap.weight} kg</strong></div>
    <div class="row" style="margin-top:11px"><span class="muted">Recycler</span><strong>${r.name}</strong></div>
    <div class="row" style="margin-top:11px"><span class="muted">Location</span><strong>Bhusawal</strong></div>
  </div>
  <div class="timeline">
    <div><strong>Scrap collected</strong><div class="muted small">Photo + weight recorded</div></div>
    <div><strong>Recycler selected</strong><div class="muted small">${r.name} · ${r.rate}/kg</div></div>
    <div><strong>Handover pending</strong><div class="muted small">QR verification required</div></div>
  </div>
  <button class="btn" onclick="showScreen('handover')">Generate Handover QR →</button>
</section>`;
}

function handoverScreen(){
 const r=state.selectedRecycler||recyclers[0];
return `<section class="screen">
  <button class="back" onclick="showScreen('lot')">← Back</button>
  <div class="eyebrow">Digital Handover</div><h2>Confirm Handover</h2>
  <div class="card" style="text-align:center">
    <div class="lot-code">${state.lotId}</div>
    <div class="qr"></div>
    <strong>Ask recycler to scan</strong>
    <p class="muted small">This verifies the lot, timestamp and transaction record.</p>
  </div>
  <div class="card">
    <div class="row"><span class="muted">Recycler</span><strong>${r.name}</strong></div>
    <div class="row" style="margin-top:11px"><span class="muted">Quoted amount</span><strong>${money(r.rate*state.scrap.weight)}</strong></div>
    <div class="row" style="margin-top:11px"><span class="muted">Status</span><span class="tag">Awaiting confirmation</span></div>
  </div>
  <button class="btn" onclick="state.earnings+=Math.round(r.rate*state.scrap.weight);showScreen('success')">Simulate Recycler Confirmation</button>
</section>`;
}

function successScreen(){
 const r=state.selectedRecycler||recyclers[0], amount=Math.round(r.rate*state.scrap.weight);
return `<section class="screen success">
  <div class="success-icon">✓</div>
  <div class="eyebrow">Transaction complete</div>
  <h1>Handover Confirmed</h1>
  <p class="muted">Lot ${state.lotId} has been digitally recorded.</p>
  <div class="card" style="text-align:left;margin-top:25px">
    <div class="row"><span class="muted">Amount</span><strong class="money">${money(amount)}</strong></div>
    <div class="row" style="margin-top:12px"><span class="muted">Recycler</span><strong>${r.name}</strong></div>
    <div class="row" style="margin-top:12px"><span class="muted">Payment</span><strong>UPI / Cash</strong></div>
  </div>
  <button class="btn" onclick="showScreen('earnings')">View My Earnings</button>
  <button class="btn secondary" onclick="showScreen('home')">Back to Home</button>
</section>`;
}

function earningsScreen(){
return `<section class="screen">
  <div class="eyebrow">My Money</div><h2>My Earnings</h2>
  <div class="card" style="background:#087443;color:#fff"><div class="small" style="opacity:.8">Total earnings</div><div class="money">${money(state.earnings)}</div><div class="small" style="opacity:.8;margin-top:5px">This month</div></div>
  <div class="quick">
    <div class="stat"><strong>${money(6920)}</strong><span>Paid</span></div>
    <div class="stat"><strong>${money(1500)}</strong><span>Pending</span></div>
    <div class="stat"><strong>7</strong><span>Lots</span></div>
  </div>
  <div class="section-title"><h3>Recent transactions</h3></div>
  ${["PCB / E-waste|₹2,125|Completed","Copper Cable|₹1,850|Completed","Battery|₹920|Pending","Aluminium|₹980|Completed"].map(x=>{let a=x.split("|");return `<div class="card"><div class="row"><div><strong>${a[0]}</strong><div class="muted small">${a[2]} · 2 days ago</div></div><strong>${a[1]}</strong></div></div>`}).join("")}
</section>`;
}

function lotsScreen(){
return `<section class="screen">
  <div class="eyebrow">Traceability</div><h2>My Lots</h2>
  <div class="pill-tabs"><button class="active">All</button><button>Active</button><button>Completed</button></div>
  <div class="card" style="margin-top:15px">
    <div class="row"><strong>${state.lotId}</strong><span class="tag">Completed</span></div>
    <p class="muted small">${state.scrap.material} · ${state.scrap.weight} kg</p>
    <div class="row"><span class="muted small">EcoRecycle · Bhusawal</span><strong>${money(Math.round((state.selectedRecycler||recyclers[0]).rate*state.scrap.weight))}</strong></div>
  </div>
  <div class="card"><div class="row"><strong>KBC-00121</strong><span class="tag">Completed</span></div><p class="muted small">Copper Cable · 3.1 kg</p><div class="row"><span class="muted small">GreenCycle · Jalgaon</span><strong>₹1,850</strong></div></div>
</section>`;
}

function profileScreen(){
return `<section class="screen">
  <div class="eyebrow">Account</div><h2>My Profile</h2>
  <div class="card">
    <div class="row"><div style="width:58px;height:58px;border-radius:50%;background:#dff3e5;display:grid;place-items:center;font-size:28px">👨🏽‍🔧</div><div style="flex:1"><strong>Kaustubh</strong><div class="muted small">Collector ID · KC-0104</div></div><span class="tag">Verified</span></div>
  </div>
  <div class="card">
    <div class="toggle"><div><strong>Marathi</strong><div class="muted small">App language</div></div><strong>मराठी</strong></div>
    <div class="toggle"><div><strong>Offline sync</strong><div class="muted small">Sync when internet returns</div></div><div class="switch on"></div></div>
    <div class="toggle"><div><strong>Voice assistance</strong><div class="muted small">Read important actions aloud</div></div><div class="switch"></div></div>
  </div>
  <div class="warning">Prototype mode: prices, recycler profiles and AI results are illustrative. Production version will connect to verified data sources.</div>
</section>`;
}

function notificationsScreen(){
return `<section class="screen">
  <button class="back" onclick="showScreen('home')">← Back</button>
  <div class="eyebrow">Updates</div><h2>Notifications</h2>
  <div class="card"><strong>💰 New recycler offer</strong><p class="muted small">EcoRecycle offered ₹850/kg for your PCB lot.</p></div>
  <div class="card"><strong>📦 Handover confirmed</strong><p class="muted small">Lot KBC-00121 was successfully recorded.</p></div>
  <div class="card"><strong>⚠️ Safety reminder</strong><p class="muted small">Handle batteries carefully and never burn e-waste.</p></div>
</section>`;
}

render();
