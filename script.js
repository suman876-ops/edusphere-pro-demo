// ============================================================================
// 1. CENTRALIZED ERP STATE & EDITABLE CONFIGURATION
// ============================================================================

const STATE = {
  view: 'overview',
  campus: 'kolkata',
  role: 'student',
  lang: 'en',
  phoneMode: 'qr',
  qrToken: 'DEMO-QR-0001',
  qrSecondsLeft: 15,
  lastDemoFee: { utrNumber: 'DEMO-0001', invoiceNumber: 'DEMO-GST-001' },
  digilockerVerified: true,
  aadhaarVerified: true,
  notifications: [
    { title: 'Demo Bus A crossed Central Stop', detail: 'Main Campus route • ETA 6 minutes', time: 'Just now', unread: true },
    { title: 'UPI fee payment reconciled', detail: 'GST receipt is ready to view', time: '8 min ago', unread: true },
    { title: 'Attendance verified', detail: 'Classroom QR and geo-fence check passed', time: '24 min ago', unread: true },
    { title: 'DigiLocker documents verified', detail: 'Admission records are up to date', time: '1 hr ago', unread: true }
  ],

  // Multi-Campus Tenancy Data
  campuses: {
    kolkata: {
      name: 'Main Campus (Kolkata HQ)',
      subdomain: 'main.college.edu → tenant_kolkata_01',
      students: 5420,
      faculty: 340,
      attendance: '95.4%',
      revenue: '₹5.48 Cr',
      buses: 22
    },
    saltlake: {
      name: 'Salt Lake AI & FinTech Campus',
      subdomain: 'saltlake.college.edu → tenant_saltlake_02',
      students: 3180,
      faculty: 215,
      attendance: '97.1%',
      revenue: '₹3.92 Cr',
      buses: 14
    },
    medinipur: {
      name: 'Paschim Medinipur Tech Campus',
      subdomain: 'medinipur.college.edu → tenant_medinipur_03',
      students: 2490,
      faculty: 165,
      attendance: '93.8%',
      revenue: '₹2.64 Cr',
      buses: 11
    }
  },

  // Clearly fictional sample profile for document previews.
  student: {
    name: 'Demo Student',
    initials: 'DS',
    id: 'DEMO-BCA-001',
    course: 'Bachelor of Computer Applications (BCA)',
    semester: 'Semester II (Demo Session)',
    guardian: 'Demo Guardian',
    address: 'Sample address (demo data)',
    cgpa: '8.50',
    attendance: '90.0%',
    hostel: 'Demo Hostel, Room 001',
    bus: 'Demo Bus A (Central Stop → Main Gate)'
  },

  // All 11 Poster User Roles
  roles: {
    student: { name: 'Demo Student', portal: 'Student Portal (Web / Mobile App)', avatar: 'DS', kpiNote: 'Viewing sample attendance, LMS assignments, CGPA & digital passes.' },
    applicant: { name: 'Demo Applicant', portal: 'Public Website + Admission Portal (Next.js SSR)', avatar: 'DA', kpiNote: 'Sample admission workflow with DigiLocker & Aadhaar eKYC.' },
    parent: { name: 'Demo Parent', portal: 'Parent Portal (Web / Mobile App)', avatar: 'DP', kpiNote: 'Viewing sample attendance, live GPS bus location & fee receipts.' },
    faculty: { name: 'Demo Faculty', portal: 'Faculty Portal (Web / Mobile App)', avatar: 'DF', kpiNote: 'Sample classroom QR tokens, grading and LMS workflows.' },
    hod: { name: 'Demo HoD', portal: 'Department Head Console (Next.js)', avatar: 'DH', kpiNote: 'Sample department timetables, syllabus credits & faculty leave.' },
    registrar: { name: 'Demo Registrar', portal: 'Registrar / Admin Staff Console', avatar: 'DR', kpiNote: 'Sample enrollment, university exam sync & certificate workflows.' },
    accountant: { name: 'Demo Accountant', portal: 'Finance & GST Console (Next.js)', avatar: 'DA', kpiNote: 'Sample UPI reconciliation, scholarships & GST invoices.' },
    librarian: { name: 'Demo Librarian', portal: 'Library Barcode & Meilisearch Console', avatar: 'DL', kpiNote: 'Sample book catalog, barcode issue-return & overdue fines.' },
    warden: { name: 'Demo Warden', portal: 'Hostel Warden & Mess Console', avatar: 'DW', kpiNote: 'Sample room allotments, curfew QR logs & mess attendance.' },
    transport: { name: 'Demo Transport Manager', portal: 'Transport Fleet & GPS Telemetry Console', avatar: 'DT', kpiNote: 'Sample live GPS bus coordinates, fuel & route stops.' },
    principal: { name: 'Demo Principal', portal: 'Executive BI & Multi-Campus Management', avatar: 'DP', kpiNote: 'Sample multi-campus analytics, audit compliance & financial overview.' }
  },

  // Interactive showcase cards; only the Admin Data Vault persists records.
  modules: [
    { id: 'auth', code: 'M01', name: 'Auth / IAM', layer: 'Security', desc: 'JWT Pre-check, RBAC for 11 roles, OAuth2 & 2FA session control.', metric: '11 Roles Active' },
    { id: 'tenancy', code: 'M02', name: 'Tenancy (Multi-Campus)', layer: 'Core', desc: 'Sample campus selector and campus-specific dashboard views.', metric: '3 Demo Campuses' },
    { id: 'admissions', code: 'M03', name: 'Admissions', layer: 'Onboarding', desc: 'Enquiry → Merit list → DigiLocker doc pull → automated seat allocation.', metric: '1,420 Applications' },
    { id: 'students', code: 'M04', name: 'Students', layer: 'Core', desc: '360° student lifecycle dossier, ABC ID, disciplinary & medical records.', metric: '5,420 Profiles' },
    { id: 'faculty', code: 'M05', name: 'Faculty / HR', layer: 'HRMS', desc: 'Faculty workload, biometric leave approval, research & payroll slips.', metric: '340 Staff Members' },
    { id: 'academics', code: 'M06', name: 'Academics', layer: 'Curriculum', desc: 'NEP-2020 CBCS programs, batches, electives & credit bank.', metric: '28 Degree Programs' },
    { id: 'timetable', code: 'M07', name: 'Timetable', layer: 'Scheduling', desc: 'AI conflict-free room & faculty schedule generator with instant swap.', metric: '0 Clashes' },
    { id: 'attendance', code: 'M08', name: 'Attendance (QR + Geo)', layer: 'Demo Workflow', desc: 'Local 15-second QR animation and simulated 50m GPS check.', metric: '95.4% Sample' },
    { id: 'exams', code: 'M09', name: 'Exams & Results', layer: 'Assessment', desc: 'Hall tickets, seating plans, SGPA/CGPA computation & University sync.', metric: 'Sem-II Ready' },
    { id: 'fees', code: 'M10', name: 'Fees & Payments', layer: 'Demo Workflow', desc: 'Sample fee receipt flow; no bank, UPI or payment gateway is connected.', metric: '₹5.48 Cr Sample' },
    { id: 'library', code: 'M11', name: 'Library', layer: 'Operations', desc: 'Meilisearch instant catalog, barcode book issue/return & e-journals.', metric: '48,000 Volumes' },
    { id: 'hostel', code: 'M12', name: 'Hostel & Mess', layer: 'Operations', desc: 'Wing/room allocation, mess QR coupons & parent gate-pass alerts.', metric: '98% Occupancy' },
    { id: 'transport', code: 'M13', name: 'Transport (Bus GPS)', layer: 'Demo Animation', desc: 'Animated sample bus coordinates, speed alerts and route estimates.', metric: '22 Demo Buses' },
    { id: 'lms', code: 'M14', name: 'LMS-lite', layer: 'Learning', desc: 'Lecture PDFs, coding lab submissions, plagiarism check & quizzes.', metric: '1,850 Resources' },
    { id: 'comm', code: 'M15', name: 'Communication', layer: 'Messaging', desc: 'Redis Pub/Sub notices, WhatsApp/SMS transactional alerts & role chat.', metric: '99.9% Delivered' },
    { id: 'bi', code: 'M16', name: 'Reports & BI', layer: 'Analytics', desc: 'Executive dashboards, retention prediction & Excel/PDF statutory exports.', metric: 'Real-Time Charts' },
    { id: 'files', code: 'M17', name: 'Files (S3 / MinIO)', layer: 'Storage', desc: 'Encrypted object storage for ID cards, marksheets & signed deliverables.', metric: '1.8 TB Stored' },
    { id: 'audit', code: 'M18', name: 'Audit & Compliance', layer: 'Governance', desc: 'Immutable activity logs, NAAC/NIRF data packs & GDPR/DPDP compliance.', metric: '100% Auditable' }
  ],

  // Meilisearch Instant Index
  searchRecords: [
    { category: 'Student', title: 'Demo Student (DEMO-BCA-001)', info: 'BCA Sem-II • CGPA 8.50 • Sample Campus' },
    { category: 'Student', title: 'Demo Student (DEMO-CSE-002)', info: 'B.Tech CSE • CGPA 8.20 • Sample Campus' },
    { category: 'Faculty', title: 'Demo Faculty', info: 'Faculty - Data Structures & Algorithms in C' },
    { category: 'Library', title: 'The C Programming Language (Kernighan & Ritchie)', info: 'Rack C-04 • Available for Issue' },
    { category: 'Finance', title: 'Sample payment • ₹42,500', info: 'Demo record • Sample invoice #DEMO-GST-001' },
    { category: 'Transport', title: 'Demo Bus A (DEMO-VEHICLE-01)', info: 'Central Stop → Main Gate (ETA 6 mins)' }
  ]
};

// Multi-Language Dictionary
const LANG_DICT = {
  en: {
    brandSub: 'Multi-Campus Modular ERP',
    campusLabel: '1. Campus selector (demo data)',
    roleLabel: '2. Demo User Role (11 Examples)',
    navOverview: 'Sample Dashboard',
    navModules: '18 Interactive Module Demos',
    navAdmissions: 'Admissions Demo',
    navAttendance: 'QR Demo + 50m Geo-Fence',
    navFinance: 'Fees & Payment Demo',
    navTransport: 'Animated Bus GPS Demo',
    navLifecycle: '9-Step Lifecycle & Infra Stack'
  },
  bn: {
    brandSub: 'মাল্টি-ক্যাম্পাস মডুলার ইআরপি',
    campusLabel: '১. ক্যাম্পাস নির্বাচন (নমুনা তথ্য)',
    roleLabel: '২. ডেমো ব্যবহারকারীর ধরন (১১টি উদাহরণ)',
    navOverview: 'নমুনা ড্যাশবোর্ড',
    navModules: '১৮টি ইন্টারঅ্যাক্টিভ মডিউল ডেমো',
    navAdmissions: 'অ্যাডমিশন ডেমো',
    navAttendance: 'QR ডেমো ও ৫০ মিটার জিও-ফেন্স',
    navFinance: 'ফি ও পেমেন্ট ডেমো',
    navTransport: 'অ্যানিমেটেড বাস GPS ডেমো',
    navLifecycle: '৯-ধাপের লাইফসাইকেল ও ইনফ্রা'
  },
  hi: {
    brandSub: 'मल्टी-कैंपस मॉड्यूलर ईआरपी',
    campusLabel: '1. कैंपस चुनें (डेमो डेटा)',
    roleLabel: '2. डेमो यूज़र रोल (11 उदाहरण)',
    navOverview: 'डेमो डैशबोर्ड',
    navModules: '18 इंटरैक्टिव मॉड्यूल डेमो',
    navAdmissions: 'एडमिशन डेमो',
    navAttendance: 'QR डेमो और 50m जियो-फेंस',
    navFinance: 'फीस और भुगतान डेमो',
    navTransport: 'एनिमेटेड बस GPS डेमो',
    navLifecycle: '9-स्टेप लाइफसाइकिल और इन्फ्रा'
  }
};

let activeChartInstance = null;
let vaultAuthenticated = false;
let adminHoldTimer = null;
let adminHoldStart = null;
let adminHoldTriggered = false;

function isBlankAdminGestureTarget(target) {
  if (!(target instanceof Element)) return false;
  if (target.closest('button, a, input, select, textarea, [contenteditable="true"], [role="dialog"]')) return false;
  return !Array.from(target.childNodes).some(node =>
    node.nodeType === Node.TEXT_NODE && node.textContent.trim()
  );
}

function cancelAdminHold() {
  clearTimeout(adminHoldTimer);
  adminHoldTimer = null;
  adminHoldStart = null;
}

function startAdminHold(event) {
  if (event.button !== 0 || !isBlankAdminGestureTarget(event.target)) return;
  cancelAdminHold();
  adminHoldTriggered = false;
  adminHoldStart = { x: event.clientX, y: event.clientY };
  adminHoldTimer = setTimeout(() => {
    adminHoldTriggered = true;
    openDataVault();
    setTimeout(() => {
      adminHoldTriggered = false;
    }, 1000);
  }, 2500);
}

function moveAdminHold(event) {
  if (!adminHoldStart) return;
  if (Math.hypot(event.clientX - adminHoldStart.x, event.clientY - adminHoldStart.y) > 12) {
    cancelAdminHold();
  }
}

// ============================================================================
// 2. CORE VIEWPORT RENDERER
// ============================================================================

function renderApp() {
  const viewport = document.getElementById('appViewport');
  const campusObj = STATE.campuses[STATE.campus];
  const roleObj = STATE.roles[STATE.role];

  // Top Role & Tenant Banner
  const roleBanner = `
    <div class="pro-card rounded-2xl p-5 border-l-4 border-l-indigo-500 flex flex-wrap items-center justify-between gap-4">
      <div>
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            ${roleObj.portal}
          </span>
          <span class="text-[11px] font-mono text-emerald-400">● Local SQLite • Admin-protected data vault</span>
        </div>
        <h2 class="text-xl font-extrabold text-white mt-1.5">${campusObj.name} — ${roleObj.name}</h2>
        <p class="text-xs text-slate-400 mt-0.5">${roleObj.kpiNote}</p>
        <p class="text-[11px] text-amber-300 mt-1">Prototype UI • external integrations and sample dashboard figures are simulated.</p>
      </div>
      <div class="flex flex-wrap items-center gap-2">
        <button onclick="openPdfModal('idcard')" class="px-3 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-xs font-semibold text-indigo-300 border border-slate-700 flex items-center gap-1.5">
          <i data-lucide="id-card" class="w-4 h-4"></i> ID Card PDF
        </button>
        <button onclick="openPdfModal('hallticket')" class="px-3 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-xs font-semibold text-purple-300 border border-slate-700 flex items-center gap-1.5">
          <i data-lucide="ticket" class="w-4 h-4"></i> Hall Ticket PDF
        </button>
        <button onclick="openPdfModal('marksheet')" class="px-3 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-xs font-semibold text-emerald-300 border border-slate-700 flex items-center gap-1.5">
          <i data-lucide="award" class="w-4 h-4"></i> Mark Sheet PDF
        </button>
        <button onclick="openPdfModal('feereceipt')" class="px-3 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-xs font-semibold text-amber-300 border border-slate-700 flex items-center gap-1.5">
          <i data-lucide="receipt" class="w-4 h-4"></i> GST Receipt PDF
        </button>
      </div>
    </div>
  `;

  let bodyHTML = '';
  if (STATE.view === 'overview') bodyHTML = getOverviewHTML(campusObj);
  else if (STATE.view === 'modules') bodyHTML = getModulesHTML();
  else if (STATE.view === 'admissions') bodyHTML = getAdmissionsHTML();
  else if (STATE.view === 'attendance') bodyHTML = getAttendanceHTML();
  else if (STATE.view === 'finance') bodyHTML = getFinanceHTML();
  else if (STATE.view === 'transport') bodyHTML = getTransportHTML();
  else if (STATE.view === 'lifecycle') bodyHTML = getLifecycleHTML();

  viewport.innerHTML = roleBanner + bodyHTML;
  lucide.createIcons();

  if (STATE.view === 'overview') {
    initBIChart();
  }
  renderExpoPhone();
}

// ============================================================================
// 3. INDIVIDUAL TAB TEMPLATES
// ============================================================================

function getOverviewHTML(campusObj) {
  return `
    <!-- 4 KPI CARDS -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="pro-card p-5 rounded-2xl">
        <div class="flex justify-between items-center">
          <span class="text-xs text-slate-400">Enrolled Students</span>
          <i data-lucide="users" class="w-5 h-5 text-indigo-400"></i>
        </div>
        <p class="text-2xl font-extrabold text-white mt-2">${campusObj.students.toLocaleString()}</p>
        <p class="text-[11px] text-emerald-400 mt-1">Sample campus figure • not verified records</p>
      </div>

      <div class="pro-card p-5 rounded-2xl">
        <div class="flex justify-between items-center">
          <span class="text-xs text-slate-400">QR + Geo-Fence Attendance</span>
          <i data-lucide="scan-line" class="w-5 h-5 text-emerald-400"></i>
        </div>
        <p class="text-2xl font-extrabold text-white mt-2">${campusObj.attendance}</p>
        <p class="text-[11px] text-indigo-300 mt-1 font-mono">Token: ${STATE.qrToken}</p>
      </div>

      <div class="pro-card p-5 rounded-2xl">
        <div class="flex justify-between items-center">
          <span class="text-xs text-slate-400">Sample fee figures</span>
          <i data-lucide="indian-rupee" class="w-5 h-5 text-amber-400"></i>
        </div>
        <p class="text-2xl font-extrabold text-white mt-2">${campusObj.revenue}</p>
        <p class="text-[11px] text-amber-300 mt-1">Illustrative amount • no payment service connected</p>
      </div>

      <div class="pro-card p-5 rounded-2xl">
        <div class="flex justify-between items-center">
          <span class="text-xs text-slate-400">Active GPS Fleet & Faculty</span>
          <i data-lucide="bus" class="w-5 h-5 text-cyan-400"></i>
        </div>
        <p class="text-2xl font-extrabold text-white mt-2">${campusObj.buses} Buses • ${campusObj.faculty} Staff</p>
        <p class="text-[11px] text-cyan-300 mt-1">Animated sample telemetry</p>
      </div>
    </div>

    <!-- CHART.JS ANALYTICS + INDIA SPECIFIC INTEGRATIONS -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2 pro-card rounded-2xl p-6">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h3 class="text-sm font-bold text-white">Multi-Campus Attendance & Fee Collection Trend (Reports & BI)</h3>
            <p class="text-xs text-slate-400">Illustrative charts with sample figures • not a live analytics feed</p>
          </div>
          <span class="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-2 py-1 rounded">SAMPLE CHART</span>
        </div>
        <div class="h-64">
          <canvas id="biAnalyticsChart"></canvas>
        </div>
      </div>

      <!-- India Specific Integrations Panel -->
      <div class="pro-card rounded-2xl p-6 space-y-3">
        <h3 class="text-sm font-bold text-white flex items-center gap-2">
          <i data-lucide="cpu" class="w-4 h-4 text-amber-400"></i>
          India-Specific Integrations
        </h3>
        <div class="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
          <div>
            <p class="font-bold text-white">DigiLocker workflow demo</p>
            <p class="text-slate-400 text-[11px]">Document verification screen preview</p>
          </div>
          <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[10px]">DEMO</span>
        </div>
        <div class="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
          <div>
            <p class="font-bold text-white">Identity verification demo</p>
            <p class="text-slate-400 text-[11px]">No UIDAI or biometric service connected</p>
          </div>
          <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[10px]">DEMO</span>
        </div>
        <div class="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
          <div>
            <p class="font-bold text-white">Payment workflow demo</p>
            <p class="text-slate-400 text-[11px]">No UPI or payment gateway connected</p>
          </div>
          <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[10px]">DEMO</span>
        </div>
        <div class="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
          <div>
            <p class="font-bold text-white">Invoice and exam demo</p>
            <p class="text-slate-400 text-[11px]">Sample document • no university sync</p>
          </div>
          <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[10px]">DEMO</span>
        </div>
      </div>
    </div>
  `;
}

function getModulesHTML() {
  const cards = STATE.modules.map(m => `
    <div onclick="openModuleConsole('${m.id}')" class="pro-card p-4 rounded-2xl cursor-pointer group">
      <div class="flex items-center justify-between mb-2">
        <span class="text-[11px] font-mono text-indigo-400 font-bold">${m.code} • ${m.layer}</span>
        <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300">${m.metric}</span>
      </div>
      <h4 class="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">${m.name}</h4>
      <p class="text-xs text-slate-400 mt-1 leading-relaxed">${m.desc}</p>
      <div class="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-indigo-400 font-semibold">
        <span>Open Module Console</span>
        <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
      </div>
    </div>
  `).join('');

  return `
    <div class="pro-card rounded-2xl p-6">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-5">
        <div>
          <h3 class="text-base font-bold text-white">ERP Module Showcase — Click Any of the 18 Demo Views</h3>
          <p class="text-xs text-slate-400">Interactive UI prototypes with sample metrics; external integrations are not connected.</p>
        </div>
        <span class="text-xs font-mono bg-amber-500/20 text-amber-300 px-3 py-1 rounded-xl">18 Demo Module Views</span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        ${cards}
      </div>
    </div>
  `;
}

function getAdmissionsHTML() {
  return `
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2 pro-card rounded-2xl p-6">
        <h3 class="text-base font-bold text-white mb-1">Admissions Demo (local application form)</h3>
        <p class="text-xs text-slate-400 mb-4">Sample application → locally stored record → admin-only review</p>
        <p class="demo-data-notice mb-4">Local demo storage: use fictional applicant details only. Real student records need a separate privacy and security review.</p>
        <form onsubmit="handleAdmissionSubmit(event)" class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label class="block text-slate-400 mb-1">Applicant Name</label>
            <input name="applicantName" type="text" placeholder="Enter applicant name" required maxlength="120" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white" />
          </div>
          <div>
            <label class="block text-slate-400 mb-1">Father's Name</label>
            <input name="guardianName" type="text" placeholder="Enter guardian name (demo only)" required maxlength="120" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white" />
          </div>
          <div>
            <label class="block text-slate-400 mb-1">Program Selection</label>
            <select name="program" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white">
              <option>BCA (Bachelor of Computer Applications)</option>
              <option>B.Tech Computer Science & Engineering</option>
              <option>MCA (Master of Computer Applications)</option>
            </select>
          </div>
          <div>
            <label class="block text-slate-400 mb-1">Permanent Address</label>
            <input name="address" type="text" placeholder="Enter address (demo only)" maxlength="300" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white" />
          </div>
          <div class="sm:col-span-2 flex justify-end pt-2">
            <button type="submit" class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold">
              Submit Demo Application
            </button>
          </div>
        </form>
      </div>

      <div class="pro-card rounded-2xl p-6 space-y-4">
        <h3 class="text-base font-bold text-white">DigiLocker & Aadhaar eKYC</h3>
        <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
          <div class="flex justify-between font-bold">
            <span>DigiLocker Marksheet Pull</span>
            <span class="text-amber-400 font-mono">DEMO</span>
          </div>
          <p class="text-slate-400">Class X & XII Board Certificates verified via National Academic Depository (NAD).</p>
          <button onclick="pushToast('DigiLocker Re-Synced: 100% Authentic Docs', 'emerald')" class="w-full py-2 rounded-lg bg-emerald-500/20 text-emerald-300 font-semibold">
            Re-Verify DigiLocker API
          </button>
        </div>
        <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
          <div class="flex justify-between font-bold">
            <span>UIDAI Aadhaar eKYC</span>
            <span class="text-amber-400 font-mono">DEMO</span>
          </div>
          <p class="text-slate-400">Aadhaar linked with Academic Bank of Credits (ABC ID).</p>
        </div>
      </div>
    </div>
  `;
}

function getAttendanceHTML() {
  return `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="pro-card rounded-2xl p-6 flex flex-col items-center text-center">
        <div class="w-full flex justify-between items-center mb-3">
          <div class="text-left">
            <h3 class="text-base font-bold text-white">Classroom QR Demo + 15s Rotation</h3>
            <p class="text-xs text-slate-400">Anti-proxy dynamic token with 50-meter GPS Geo-fence lock</p>
          </div>
          <span class="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-mono text-xs" id="qrCountdownBadge">
            Rotates in ${STATE.qrSecondsLeft}s
          </span>
        </div>

        <div class="qr-viewport w-56 h-56 rounded-2xl bg-slate-950 border-2 border-indigo-500/50 flex flex-col items-center justify-center p-4 my-2">
          <div class="laser-line"></div>
          <i data-lucide="qr-code" class="w-32 h-32 text-indigo-400"></i>
          <span class="text-xs font-mono text-emerald-400 mt-2" id="liveQrTokenText">${STATE.qrToken}</span>
        </div>

        <div class="flex gap-3 mt-4">
          <button onclick="forceRotateQR()" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white border border-slate-700">
            🔄 Rotate Token Now
          </button>
          <button onclick="simulateAttendanceScan()" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white">
            📱 Scan via Expo App (Mark Present)
          </button>
        </div>
      </div>

      <div class="pro-card rounded-2xl p-6 space-y-4">
        <h3 class="text-base font-bold text-white">Geo-Fence & Subject Attendance Telemetry</h3>
        <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
          <div>
            <p class="font-bold text-white">GPS Classroom Polygon: Lab-302 (BCA Block)</p>
            <p class="text-slate-400 font-mono mt-0.5">Lat: 22.5726° N, Lng: 88.3639° E • Distance: 14m (Inside 50m Fence)</p>
          </div>
          <span class="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 font-mono">GEO OK</span>
        </div>

        <div class="space-y-3 text-xs pt-2">
          <div>
            <div class="flex justify-between mb-1"><span>BCA-201: Data Structures & Algorithms in C</span><span class="text-emerald-400 font-mono">96.5%</span></div>
            <div class="h-2 bg-slate-800 rounded-full overflow-hidden"><div class="bg-emerald-500 h-full" style="width:96.5%"></div></div>
          </div>
          <div>
            <div class="flex justify-between mb-1"><span>BCA-202: PostgreSQL & Relational Database</span><span class="text-indigo-400 font-mono">94.0%</span></div>
            <div class="h-2 bg-slate-800 rounded-full overflow-hidden"><div class="bg-indigo-500 h-full" style="width:94%"></div></div>
          </div>
          <div>
            <div class="flex justify-between mb-1"><span>BCA-203: Interactive WebGL & Frontend Systems</span><span class="text-purple-400 font-mono">98.0%</span></div>
            <div class="h-2 bg-slate-800 rounded-full overflow-hidden"><div class="bg-purple-500 h-full" style="width:98%"></div></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function getFinanceHTML() {
  return `
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2 pro-card rounded-2xl p-6">
        <div class="flex justify-between items-center mb-4">
          <div>
            <h3 class="text-base font-bold text-white">Fees, Payment & Invoice Demo</h3>
            <p class="text-xs text-slate-400">Sample payment workflow. No real UPI or payment webhook is connected.</p>
          </div>
          <button onclick="openPdfModal('feereceipt')" class="px-3 py-1.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs">
            Download GST Invoice PDF
          </button>
        </div>

        <table class="w-full text-left border-collapse text-xs">
          <thead>
            <tr class="border-b border-slate-800 text-slate-400">
              <th class="py-2.5 px-3">Description</th>
              <th class="py-2.5 px-3">Amount</th>
              <th class="py-2.5 px-3">UTR / Gateway Ref</th>
              <th class="py-2.5 px-3">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800">
            <tr>
              <td class="py-3 px-3 font-semibold text-white">Semester-II Tuition & Lab Fee</td>
              <td class="py-3 px-3 font-mono text-white">₹35,000</td>
              <td class="py-3 px-3 font-mono text-indigo-300">UTR: DEMO-0001</td>
              <td class="py-3 px-3"><span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">RECONCILED</span></td>
            </tr>
            <tr>
              <td class="py-3 px-3 font-semibold text-white">Hostel & Mess Charges (Incl. GST)</td>
              <td class="py-3 px-3 font-mono text-white">₹7,500</td>
              <td class="py-3 px-3 font-mono text-indigo-300">DEMO-PAYMENT-002</td>
              <td class="py-3 px-3"><span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">PAID</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="pro-card rounded-2xl p-6 space-y-4">
        <h3 class="text-base font-bold text-white">Simulate Live UPI Payment</h3>
        <p class="text-xs text-slate-400">Test instant UTR webhook reconciliation and automatic PDF receipt generation.</p>
        <input type="text" value="demo@upi" aria-label="Demo UPI ID" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white font-mono" />
        <button onclick="simulateUpiWebhook()" class="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white">
          ⚡ Trigger UPI Webhook & Generate GST Receipt
        </button>
      </div>
    </div>
  `;
}

function getTransportHTML() {
  return `
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Animated SVG GPS Fleet Map -->
      <div class="lg:col-span-2 pro-card rounded-2xl p-6">
        <div class="flex justify-between items-center mb-4">
          <div>
            <h3 class="text-base font-bold text-white">Animated GPS Bus Telemetry Radar (Demo)</h3>
            <p class="text-xs text-slate-400">Sample route tracking for Demo Bus A, B, and C</p>
          </div>
          <span class="text-xs font-mono bg-cyan-500/20 text-cyan-300 px-2.5 py-1 rounded-lg">SPEED: 44 KM/H • ETA 6 MIN</span>
        </div>

        <div class="gps-map rounded-2xl bg-slate-950 border border-slate-800 p-4 relative overflow-hidden">
          <svg viewBox="0 0 600 220" class="w-full h-52" role="img" aria-label="Animated sample bus route between demo campus stops">
            <!-- Grid lines -->
            <line class="gps-grid-line" x1="0" y1="55" x2="600" y2="55" stroke="#1e293b" stroke-dasharray="4"/>
            <line class="gps-grid-line" x1="0" y1="110" x2="600" y2="110" stroke="#1e293b" stroke-dasharray="4"/>
            <line class="gps-grid-line" x1="0" y1="165" x2="600" y2="165" stroke="#1e293b" stroke-dasharray="4"/>
            <!-- Route Path -->
            <path id="busRoutePath" class="gps-route" d="M 40 170 Q 180 40, 320 120 T 560 60" fill="none" stroke="#6366f1" stroke-width="4" stroke-dasharray="8 4"/>
            <!-- Stops -->
            <circle class="gps-stop" cx="40" cy="170" r="7" fill="#10b981"/>
            <text class="gps-map-label" x="25" y="195" fill="#94a3b8" font-size="11" font-family="monospace">Stop 1: Central</text>

            <circle class="gps-stop" cx="230" cy="85" r="7" fill="#10b981"/>
            <text class="gps-map-label" x="190" y="65" fill="#94a3b8" font-size="11" font-family="monospace">Stop 2: East Gate</text>

            <!-- Live Moving Bus Point -->
            <g class="gps-bus-marker">
              <animateMotion dur="12s" repeatCount="indefinite" calcMode="paced">
                <mpath href="#busRoutePath"/>
              </animateMotion>
              <circle class="gps-ping" r="12" fill="#38bdf8"/>
              <circle class="gps-bus-core" r="6" fill="#38bdf8"/>
              <text class="gps-bus-label" x="14" y="22" fill="#38bdf8" font-size="12" font-weight="bold" font-family="monospace">🚌 Demo Bus A</text>
            </g>
            <g class="gps-bus-static" transform="translate(385 115)" aria-hidden="true">
              <circle class="gps-bus-core" r="6" fill="#38bdf8"/>
              <text class="gps-bus-label" x="14" y="22" fill="#38bdf8" font-size="12" font-weight="bold" font-family="monospace">🚌 Demo Bus A</text>
            </g>

            <circle cx="560" cy="60" r="8" fill="#f59e0b"/>
            <text class="gps-map-campus-label" x="475" y="40" fill="#f8fafc" font-size="11" font-weight="bold" font-family="monospace">🏛️ EduSphere Campus</text>
          </svg>
        </div>
      </div>

      <!-- Hostel & Library Live Status -->
      <div class="pro-card rounded-2xl p-6 space-y-4">
        <h3 class="text-base font-bold text-white">Hostel, Mess & Library Status</h3>
        <div class="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
          <p class="font-bold text-white">🏢 Hostel Block-B • Room 304</p>
          <p class="text-slate-400">Sample warden gate pass • simulated mess check-in</p>
        </div>
        <div class="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
          <p class="font-bold text-white">📚 Central Library (Meilisearch)</p>
          <p class="text-slate-400">Issued: "Modern Operating Systems" • Due Date: 15 Nov 2026</p>
        </div>
      </div>
    </div>
  `;
}

function getLifecycleHTML() {
  const steps = [
    '1. Enquiry & Application (Next.js SSR)',
    '2. Admission & Fee Payment (UPI/DigiLocker)',
    '3. Academic Setup (Program, Batch, Timetable)',
    '4. Teaching & Attendance (QR + Geo-Fence)',
    '5. Exams & Results (Grades, SGPA/CGPA)',
    '6. Ongoing Operations (Library, Hostel, Bus GPS)',
    '7. Communication (Socket.IO Notice, SMS, Chat)',
    '8. Reports & Compliance (BI Dashboards, Audit)',
    '9. Alumni Portal (Post-Graduation Network)'
  ];

  return `
    <div class="pro-card rounded-2xl p-6">
      <h3 class="text-base font-bold text-white mb-4">Complete 9-Step End-to-End Student Lifecycle</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        ${steps.map((s, i) => `
          <div class="p-4 rounded-xl bg-slate-900/90 border ${i < 7 ? 'border-indigo-500/40' : 'border-slate-800'} text-xs">
            <span class="text-[10px] font-mono px-2 py-0.5 rounded ${i < 7 ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-400'}">
              ${i < 7 ? 'ACTIVE STAGE' : 'UPCOMING'}
            </span>
            <p class="font-bold text-white mt-2">${s}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ============================================================================
// 4. EXPO MOBILE APP SIMULATOR RENDERER (Right Sidebar Phone)
// ============================================================================

function renderExpoPhone() {
  const screen = document.getElementById('expoPhoneScreen');
  if (!screen) return;

  if (STATE.phoneMode === 'qr') {
    screen.innerHTML = `
      <div class="p-3 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 text-center">
        <p class="text-[10px] font-mono text-indigo-300">EXPO CAMERA + GPS ACTIVE</p>
        <p class="font-bold text-white mt-0.5">Classroom QR Scanner</p>
      </div>
      <div class="qr-viewport h-44 rounded-2xl bg-slate-950 border border-emerald-500/40 flex flex-col items-center justify-center relative">
        <div class="laser-line"></div>
        <i data-lucide="qr-code" class="w-20 h-20 text-emerald-400"></i>
        <p class="text-[10px] font-mono text-slate-300 mt-2">${STATE.qrToken}</p>
      </div>
      <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] space-y-1">
        <div class="flex justify-between"><span>Geo-Fence:</span><span class="text-emerald-400 font-mono">14m (Demo)</span></div>
        <div class="flex justify-between"><span>Redis TTL:</span><span class="text-indigo-400 font-mono" id="phoneQrTimer">${STATE.qrSecondsLeft}s</span></div>
      </div>
      <button onclick="simulateAttendanceScan()" class="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs">
        ✓ Tap to Scan & Mark Present
      </button>
    `;
  } else if (STATE.phoneMode === 'gps') {
    screen.innerHTML = `
      <div class="p-3 rounded-2xl bg-cyan-500/20 border border-cyan-500/30">
        <p class="text-[10px] font-mono text-cyan-300">SAMPLE SOCKET.IO TELEMETRY</p>
        <p class="font-bold text-white">Demo Bus A Route Tracker</p>
      </div>
      <div class="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-[11px]">
        <p class="text-emerald-400 font-mono">● Speed: 44 km/h (On Time)</p>
        <p class="text-slate-300">Next Stop: <strong>Main Campus Gate</strong></p>
        <p class="text-slate-400">ETA: <strong>6 Minutes</strong></p>
      </div>
    `;
  } else {
    screen.innerHTML = `
      <div class="p-3 rounded-2xl bg-gradient-to-br from-indigo-900 to-slate-900 border border-indigo-500/40 space-y-2 text-[11px]">
        <p class="font-bold text-white text-sm">${STATE.student.name}</p>
        <p class="text-indigo-300 font-mono">${STATE.student.id}</p>
        <p class="text-slate-300">${STATE.student.course}</p>
        <p class="text-emerald-400 font-mono">CGPA: ${STATE.student.cgpa} • Sem-II</p>
      </div>
    `;
  }
  lucide.createIcons();
}

function switchPhoneMode(mode) {
  STATE.phoneMode = mode;
  renderExpoPhone();
}

function toggleExpoSimulator() {
  const drawer = document.getElementById('expoSimulatorDrawer');
  drawer.classList.toggle('hidden');
  drawer.classList.toggle('flex');
}

// ============================================================================
// 5. CHART.JS BI ANALYTICS INITIALIZER
// ============================================================================

function initBIChart() {
  const ctx = document.getElementById('biAnalyticsChart');
  if (!ctx) return;
  if (activeChartInstance) activeChartInstance.destroy();

  activeChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['BCA', 'B.Tech CSE', 'B.Tech AI', 'MCA', 'BBA', 'MBA'],
      datasets: [
        {
          label: 'Attendance % (QR + Geo-Fence)',
          data: [96.2, 94.8, 97.1, 93.5, 91.8, 95.0],
          backgroundColor: 'rgba(169, 0, 42, 0.75)',
          borderRadius: 6
        },
        {
          label: 'Sample fee figure (not reconciled)',
          data: [98.5, 97.0, 99.1, 95.4, 94.0, 98.2],
          backgroundColor: 'rgba(197, 138, 0, 0.78)',
          borderRadius: 6
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: '#8b6855', font: { size: 11 } } }
      },
      scales: {
        y: { beginAtZero: false, min: 85, max: 100, ticks: { color: '#8b6855' }, grid: { color: 'rgba(234,217,195,0.7)' } },
        x: { ticks: { color: '#8b6855' }, grid: { display: false } }
      }
    }
  });
}

// ============================================================================
// 6. INTERACTIVE 18-MODULE CONSOLE & 4 PDF DELIVERABLES MODAL
// ============================================================================

function openModuleConsole(moduleId) {
  const mod = STATE.modules.find(m => m.id === moduleId);
  if (!mod) return;
  const modal = document.getElementById('universalModal');
  document.getElementById('uniModalTitle').textContent = `${mod.code}: ${mod.name} — Demo Module`;
  document.getElementById('uniModalBody').innerHTML = `
    <div class="module-console-details space-y-4 text-xs">
      <div class="module-console-summary p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
        <div>
          <p class="text-slate-400">Module Layer: <strong class="text-white">${mod.layer}</strong></p>
          <p class="text-slate-300 mt-1">${mod.desc}</p>
        </div>
        <span class="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-mono">${mod.metric}</span>
      </div>
      <div class="module-console-code p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1">
        <p class="text-indigo-400">// UI prototype only; this module has no connected service.</p>
        <p>module: '${mod.id}'</p>
        <p>sampleData: true</p>
        <p>persistentRecords: 'Admin Data Vault only'</p>
      </div>
    </div>
  `;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function openPdfModal(type) {
  const modal = document.getElementById('universalModal');
  const title = document.getElementById('uniModalTitle');
  const body = document.getElementById('uniModalBody');
  const s = STATE.student;
  const c = STATE.campuses[STATE.campus];

  modal.classList.remove('hidden');
  modal.classList.add('flex');

  if (type === 'idcard') {
    title.textContent = 'Demo Student ID Card Preview — Not Official';
    body.innerHTML = `
      <div class="document-preview-card student-id-preview max-w-md mx-auto bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border-2 border-indigo-500/60 rounded-2xl p-6 text-white shadow-2xl">
        <div class="flex justify-between items-center border-b border-indigo-500/30 pb-3 mb-4">
          <div>
            <h4 class="font-extrabold text-sm text-indigo-300">EDUSPHERE MULTI-CAMPUS ERP</h4>
            <p class="text-[11px] text-slate-300">${c.name}</p>
          </div>
          <span class="text-[10px] font-mono bg-amber-500/20 text-amber-700 px-2 py-0.5 rounded">DEMO • NOT OFFICIAL</span>
        </div>
        <div class="flex items-center gap-4 text-xs">
          <div class="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center font-extrabold text-xl border border-white">${s.initials}</div>
          <div class="space-y-1">
            <p class="text-base font-bold">${s.name}</p>
            <p class="font-mono text-indigo-300">${s.id}</p>
            <p>${s.course}</p>
            <p>Guardian: ${s.guardian}</p>
            <p>${s.address}</p>
          </div>
        </div>
      </div>
    `;
  } else if (type === 'hallticket') {
    title.textContent = 'Demo Examination Hall Ticket Preview — Not Official';
    body.innerHTML = `
      <div class="document-preview-card p-5 rounded-xl bg-slate-900 border border-slate-700 text-xs space-y-3">
        <div class="flex justify-between border-b border-slate-800 pb-2">
          <span class="font-bold text-white">${c.name} — Demo Exam Admit Card</span>
          <span class="text-emerald-400 font-mono">Attendance: ${s.attendance} (Eligible)</span>
        </div>
        <p><strong>Candidate:</strong> ${s.name} (${s.id})</p>
        <p><strong>Papers:</strong> BCA-201 (Data Structures in C), BCA-202 (DBMS), BCA-203 (WebGL & Graphics)</p>
      </div>
    `;
  } else if (type === 'marksheet') {
    title.textContent = 'Demo Semester Grade Card Preview — Not Official';
    body.innerHTML = `
      <div class="document-preview-card p-5 rounded-xl bg-slate-900 border border-slate-700 text-xs space-y-3">
        <div class="flex justify-between border-b border-slate-800 pb-2">
          <span class="font-bold text-white">${s.name} — Demo Grade Card</span>
          <span class="text-emerald-400 font-mono font-bold">CGPA: ${s.cgpa}</span>
        </div>
        <p>BCA-201: Advanced C Programming — <strong>Grade O (10)</strong></p>
        <p>BCA-202: PostgreSQL Database Systems — <strong>Grade A+ (9)</strong></p>
        <p>BCA-203: Interactive 3D & WebGL — <strong>Grade O (10)</strong></p>
      </div>
    `;
  } else if (type === 'feereceipt') {
    title.textContent = 'Demo Fee Receipt Preview — Not an Official Invoice';
    body.innerHTML = `
      <div class="document-preview-card p-5 rounded-xl bg-slate-900 border border-slate-700 text-xs space-y-3">
        <div class="flex justify-between border-b border-slate-800 pb-2">
          <span class="font-bold text-white">Invoice #${STATE.lastDemoFee.invoiceNumber}</span>
          <span class="text-amber-300 font-mono">UTR: ${STATE.lastDemoFee.utrNumber} (UPI Demo)</span>
        </div>
        <p>Student: <strong>${s.name} (${s.id})</strong></p>
        <p>Total Paid (Tuition + Hostel + GST): <strong class="text-emerald-400 font-mono">₹42,500.00</strong></p>
      </div>
    `;
  }
}

function closeUniversalModal() {
  const modal = document.getElementById('universalModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// ============================================================================
// 7. AETHERAI SENTINEL RECEPTIONIST & REAL-TIME TIMERS
// ============================================================================

function toggleAICopilot() {
  const drawer = document.getElementById('aiCopilotDrawer');
  drawer.classList.toggle('hidden');
  drawer.classList.toggle('flex');
}

const SENTINEL_COLLEGES = {
  midnapore: {
    name: 'Midnapore College (Autonomous)',
    profile: 'Established 1873; government-aided and autonomous since 2014; affiliated to Vidyasagar University; NAAC A+ (CGPA 3.60).',
    principal: 'Dr. Asit Panda (also Chief Controller of Examinations).',
    contact: 'Raja Bazar, Midnapore, Paschim Medinipur, PIN 721101\nTelephone: 03222-275847\nEmail: mcm.principal@gmail.com; admission@midnaporecollege.ac.in\nWebsite: midnaporecollege.ac.in',
    academics: '26 departments; 26 UG, 15 PG, 12 diploma/certificate programmes, 2 B.Voc programmes, and Ph.D.',
    admissions: 'Online through the West Bengal centralized admission portal; merit-based. Application fee: UG ₹250 per subject (+ ₹200 per extra subject); PG ₹400. APAAR/ABC ID upload is mandatory.',
    fees: [
      'B.A. Honours: Semester I ₹3,700; Semester VIII ₹3,000.',
      'B.Sc. Physics/Chemistry Honours: Semester I about ₹5,100–₹5,200; Semester VIII about ₹4,300–₹4,400.',
      'B.Sc. Mathematics: Semester I ₹4,600; Semester VIII ₹3,800.',
      'B.C.A. Honours: Semester I ₹12,200; later semesters about ₹11,350–₹11,650.',
      'B.Sc. Microbiology: Semester I ₹12,000; B.Sc. Nutrition: ₹9,900 per semester; B.Sc. Computer Science: Semester I ₹8,900.',
      'PG total fees: Philosophy/Political Science ₹17,870; Bengali/History/Sanskrit ₹21,870; Education/English ₹25,870; Mathematics ₹33,870; Physics/Zoology ₹37,870; Botany/Physiology ₹41,870; Chemistry/Geography ₹45,870; Computer Science ₹49,870.'
    ],
    hostel: 'Boys’ Hostel: 22 rooms, 63 seats; admission ₹100, caution deposit ₹1,000, session fee ₹3,300/year, room fee ₹1,400/month, food about ₹1,500/month. Girls’ Kabi Nazrul Janma Satabarshiki Chhatri Nibas: 120 seats; admission ₹100, caution deposit ₹1,000, session fee ₹3,050/year, room fee ₹1,500/month, food about ₹2,000/month.',
    transport: 'No college bus transport fleet is available.',
    attendance: '75% attendance is mandatory.',
    shifts: 'Morning shift 07:00–13:00 and Day shift 10:00–17:00.'
  },
  rnlk: {
    name: 'Raja Narendralal Khan Women’s College (Autonomous)',
    profile: 'Established 1957; government-sponsored women’s college; autonomous since 2018; affiliated to Vidyasagar University; NAAC A+ (CGPA 3.39, 4th cycle).',
    principal: 'Dr. Swapna Ghorai.',
    contact: 'Gope Palace, Midnapore, Paschim Medinipur, PIN 721102\nTelephone: 9064820067 (11:00–16:00 on working days)\nEmail: rnlkcollege@gmail.com\nWebsite: rnlkwc.ac.in',
    academics: '28 UG and 14 PG departments; 29 UG, 15 PG, 80+ add-on certificate courses, and Ph.D. through two research centres. B.Voc Multi Skilled Health Worker has been closed since 2024.',
    admissions: 'Online admission. UG application fee ₹100 per Major subject (maximum five applications); PG application fee ₹200. For PG, 80% of seats are reserved for Vidyasagar University candidates and 20% are open.',
    fees: [
      'B.A. Major admission fee ₹4,800 (includes six months’ tuition); B.A. Music ₹5,250; B.A. BPES ₹6,300.',
      'B.Sc. Mathematics ₹5,910; Physics ₹6,910; Chemistry/Computer Science ₹7,910; Zoology/Botany ₹7,610; Physiology ₹8,410; Microbiology/Biotechnology ₹9,910; BCA ₹7,910; BMLT ₹13,760.',
      'Semester II–VIII fees: ₹2,100 in odd semesters and ₹3,800 in even semesters; stated total ₹19,800.'
    ],
    hostel: 'Five hostels (Sarada, Bhagabati, Rashmani, Pravabati, Nivedita Bhaban), 437 seats total; approximate hostel fee ₹600/month. Solar hot water and generator backup are available; strict 18:00 curfew.',
    transport: 'Dedicated college buses on eight routes: Amtala, Keranichati, Abas-Girja, Jugnootala, Saratpalli, Ghosh Pump Station, Nannorchawk-Golkuanchawk, and LIC. Buses depart for college at 09:30 and 10:30 and return at 16:15 and 17:05.',
    attendance: '75% attendance is mandatory, with biometric verification.'
  },
  city: {
    name: 'Midnapore City College',
    profile: 'Established 2017; private, self-financed, co-educational college. Affiliated to Vidyasagar University for Arts, Science, and Management, and to WBUHS for Paramedical/Allied Health; AICTE approved. NAAC accreditation is not published.',
    leadership: 'Dr. Pradip Ghosh (Director/Chairman); Dr. Sudipta Chakrabarti (Principal); Dr. Kuntal Ghosh (Vice-Principal).',
    contact: 'Kuturiya, P.O. Bhadutala, Block Salboni, Paschim Medinipur, PIN 721129\nTelephone: +91-8967598946, +91-9547414192, 03222-291218\nEmail: principal@mcconline.org.in; admission@mcconline.org.in\nWebsite: mcconline.org.in',
    academics: 'Five schools: Pure & Applied Sciences, Biological Sciences, Humanities, Management Studies, and Paramedical & Allied Health. 54 programmes (14 UG, 17 PG, 17 Paramedical/Management, six Diploma) plus Ph.D.',
    admissions: 'Online admission; no application fee for online UG application. Paramedical UG admission through JENPAS/NEET-UG. MCA requires a JECA rank.',
    fees: [
      'B.A. Bengali/History/Education total programme fee ₹32,300; B.A. English ₹44,300.',
      'B.Sc. Pure Science ₹48,300; B.Sc. Computer Science ₹56,300.',
      'B.C.A. ₹1,24,300; B.Sc. Agriculture ₹2,20,300; BBA/BBA Hospital Management ₹1,72,300.',
      'BMLT (Vidyasagar University) ₹1,72,300; BMLT (WBUHS) ₹2,25,300; B.Sc. Radiology & Imaging (WBUHS) ₹2,25,300; B.Sc. Medical Microbiology (WBUHS) ₹1,35,300.',
      'MCA ₹1,40,300; MBA ₹1,80,300; MHA ₹1,40,300; M.Sc. Science PG ₹56,300.'
    ],
    hostel: 'Boys’ and girls’ hostels are a future plan; hostel facilities are currently not available.',
    transport: 'The college is on the Bhadutala–Chandrakona Road, with an MCC College Bus Stop. A college bus service is not listed in the verified information.',
    attendance: '75% attendance is mandatory. 50–74% may be allowed with a valid medical reason; 40–49% only after a parents’ meeting; below 40% is strictly debarred.'
  },
  kd: {
    name: 'K.D. College of Commerce & General Studies',
    profile: 'Established 1961; government-aided, co-educational, affiliated to Vidyasagar University; undergraduate programmes only; NAAC B+ (Cycle 2, CGPA 2.51).',
    leadership: 'Dr. Dulal Chandra Das (Principal); Prof. Pandab Chandra Majee (Teacher-in-Charge).',
    contact: 'Kshudiram Nagar, Midnapore, Paschim Medinipur, PIN 721101\nTelephone: 03222-275836, 9775100112\nEmail: kdccmid_westbengal@rediffmail.com\nWebsite: kdcollege.ac.in',
    academics: 'Eight departments; seven UG programmes: B.Com Honours in Accounting & Finance and Marketing Management; B.A. Honours in Bengali and English; B.Sc. Honours in Geography; B.A. Multidisciplinary; three-year B.Com General; and three-year B.A. General. Also offers 16 add-on certificate courses. K.D. College has no PG programmes.',
    admissions: 'Online through the West Bengal centralized admission portal; merit-based; no application fee.',
    fees: [
      'Bengali/English Honours: Semesters 1–2 ₹4,905; Semesters 3–4 and 5–6 ₹4,265; Semesters 7–8 ₹13,435.',
      'B.Com Honours (Accounting & Finance/Marketing): Semesters 1–2 ₹5,525; Semesters 3–4 and 5–6 ₹5,385; Semesters 7–8 ₹15,295–₹16,295.',
      'Geography Honours: Semesters 1–2 ₹7,925; Semesters 3–4 ₹9,785; Semesters 5–6 ₹7,785.',
      'B.A. General: ₹3,965 for Semesters 3–4 and 5–6.'
    ],
    hostel: 'No hostel facilities are available.',
    transport: 'No college transport service is available.',
    attendance: '75% attendance is required in each subject. The Principal may condone up to 15% shortage for sports/NCC/NSS/medical reasons.'
  }
};

const SENTINEL_STATE = {
  college: null,
  pendingTopic: null,
  pendingQuestion: null,
  awaitingConclusion: false,
  awaitingBossMessageChoice: false,
  awaitingBossMessage: false,
  language: null
};

const SENTINEL_TEXT = {
  en: {
    askCollege: 'Which college are you inquiring about, Sir/Madam? Midnapore College, RNLK Women’s College, Midnapore City College, or K.D. College?',
    boss: 'I’m sorry, Sir/Madam, my boss is unavailable to take calls at the moment. I can take a message for them, or help with verified college and academic information. Which would you prefer?',
    messagePrompt: 'Certainly, Sir/Madam. What message would you like me to note for my boss?',
    messageTaken: 'Thank you, Sir/Madam. I’ve noted your message in this conversation. I can’t send or deliver it outside this chat, but I can still help with verified college information.',
    offerHelp: 'Of course, Sir/Madam. I can help with verified information. Which college are you asking about?',
    private: 'Sir/Madam, this official data is managed internally by the college academic section and is not published for public access.',
    fulfilled: 'You’re welcome, Sir/Madam. Do you have any other questions, or may I conclude the call?',
    clarifyEnd: 'Of course, Sir/Madam. Is there anything else I can help with, or may I conclude the call?',
    goodbye: 'Thank you for calling, Sir/Madam. I wish you a pleasant day. [DISCONNECT_CALL]',
    unsupported: 'I don’t have verified information for that request, Sir/Madam. I can help with courses, admissions, fees, hostels, transport, attendance, or official college contacts.',
    greet: 'Namaskar, Sir/Madam. I’m AetherAI Sentinel, the college receptionist and academic information assistant for four colleges in Paschim Medinipur. How may I help you?',
    list: 'I can assist with Midnapore College, RNLK Women’s College, Midnapore City College, and K.D. College.'
  },
  bn: {
    askCollege: 'স্যার/ম্যাডাম, আপনি কোন কলেজ সম্পর্কে জানতে চাইছেন—Midnapore College, RNLK Women’s College, Midnapore City College, নাকি K.D. College?',
    boss: 'দুঃখিত স্যার/ম্যাডাম, আমার বস এই মুহূর্তে ফোন ধরতে পারছেন না। আমি তাঁর জন্য বার্তা নিতে পারি, অথবা কলেজ ও পড়াশোনা সম্পর্কে যাচাইকৃত তথ্য দিতে পারি। আপনি কোনটি চাইবেন?',
    messagePrompt: 'অবশ্যই, স্যার/ম্যাডাম। আমার বসের জন্য কী বার্তা লিখে রাখব?',
    messageTaken: 'ধন্যবাদ, স্যার/ম্যাডাম। এই কথোপকথনে আপনার বার্তাটি লিখে রেখেছি। এই চ্যাটের বাইরে বার্তাটি পাঠাতে পারি না, তবে কলেজের যাচাইকৃত তথ্য দিতে পারি।',
    offerHelp: 'অবশ্যই, স্যার/ম্যাডাম। যাচাইকৃত তথ্য দিয়ে সাহায্য করতে পারি। আপনি কোন কলেজ সম্পর্কে জানতে চাইছেন?',
    private: 'স্যার/ম্যাডাম, এই সরকারি তথ্য কলেজের অ্যাকাডেমিক বিভাগ অভ্যন্তরীণভাবে পরিচালনা করে এবং জনসাধারণের জন্য প্রকাশিত নয়।',
    fulfilled: 'আপনাকে স্বাগতম, স্যার/ম্যাডাম। আপনার কি আর কোনো প্রশ্ন আছে, নাকি আমি কলটি শেষ করতে পারি?',
    clarifyEnd: 'অবশ্যই, স্যার/ম্যাডাম। আর কোনো বিষয়ে সাহায্য করতে পারি, নাকি কলটি শেষ করব?',
    goodbye: 'কল করার জন্য ধন্যবাদ, স্যার/ম্যাডাম। আপনার দিনটি শুভ হোক। [DISCONNECT_CALL]',
    unsupported: 'দুঃখিত স্যার/ম্যাডাম, এই অনুরোধের জন্য আমার কাছে যাচাইকৃত তথ্য নেই। কোর্স, ভর্তি, ফি, হোস্টেল, পরিবহন, উপস্থিতি বা কলেজের যোগাযোগের তথ্য দিতে পারি।',
    greet: 'নমস্কার, স্যার/ম্যাডাম। আমি AetherAI Sentinel, পশ্চিম মেদিনীপুরের চারটি কলেজের তথ্য ও অ্যাকাডেমিক সহায়তার জন্য আছি। কীভাবে সাহায্য করতে পারি?',
    list: 'আমি Midnapore College, RNLK Women’s College, Midnapore City College এবং K.D. College সম্পর্কে সাহায্য করতে পারি।'
  },
  hi: {
    askCollege: 'सर/मैडम, आप किस कॉलेज के बारे में जानकारी चाहते हैं—Midnapore College, RNLK Women’s College, Midnapore City College, या K.D. College?',
    boss: 'क्षमा कीजिए सर/मैडम, मेरे बॉस इस समय कॉल लेने के लिए उपलब्ध नहीं हैं। मैं उनके लिए संदेश ले सकता/सकती हूँ या कॉलेज और पढ़ाई की सत्यापित जानकारी दे सकता/सकती हूँ। आप क्या पसंद करेंगे?',
    messagePrompt: 'ज़रूर, सर/मैडम। मैं आपके बॉस के लिए क्या संदेश नोट करूँ?',
    messageTaken: 'धन्यवाद, सर/मैडम। मैंने इस बातचीत में आपका संदेश नोट कर लिया है। मैं इसे इस चैट के बाहर भेज या पहुँचा नहीं सकता/सकती, लेकिन कॉलेज की सत्यापित जानकारी में मदद कर सकता/सकती हूँ।',
    offerHelp: 'ज़रूर, सर/मैडम। मैं सत्यापित जानकारी में सहायता कर सकता/सकती हूँ। आप किस कॉलेज के बारे में जानना चाहते हैं?',
    private: 'सर/मैडम, यह आधिकारिक डेटा कॉलेज का शैक्षणिक विभाग आंतरिक रूप से प्रबंधित करता है और सार्वजनिक रूप से उपलब्ध नहीं है।',
    fulfilled: 'आपका स्वागत है, सर/मैडम। क्या आपका कोई और प्रश्न है, या मैं कॉल समाप्त करूँ?',
    clarifyEnd: 'ज़रूर, सर/मैडम। क्या मैं किसी और बात में मदद करूँ, या कॉल समाप्त करूँ?',
    goodbye: 'कॉल करने के लिए धन्यवाद, सर/मैडम। आपका दिन शुभ हो। [DISCONNECT_CALL]',
    unsupported: 'क्षमा कीजिए सर/मैडम, इस अनुरोध के लिए मेरे पास सत्यापित जानकारी नहीं है। मैं पाठ्यक्रम, प्रवेश, शुल्क, हॉस्टल, परिवहन, उपस्थिति या आधिकारिक संपर्क जानकारी दे सकता/सकती हूँ।',
    greet: 'नमस्ते, सर/मैडम। मैं AetherAI Sentinel हूँ और Paschim Medinipur के चार कॉलेजों की सत्यापित जानकारी में सहायता करता/करती हूँ। मैं आपकी कैसे मदद करूँ?',
    list: 'मैं Midnapore College, RNLK Women’s College, Midnapore City College और K.D. College के बारे में सहायता कर सकता/सकती हूँ।'
  }
};

function sentinelLanguage(text) {
  if (/[\u0980-\u09ff]/u.test(text)) return 'bn';
  if (/[\u0900-\u097f]/u.test(text)) return 'hi';
  const normalized = text.toLowerCase();
  if (/\b(ki|koto|ache|ami|amar|college ta|bolun|dhonnobad|dhanyabad)\b/.test(normalized)) return 'bn';
  if (/\b(kya|kitna|kitni|hai|kripya|dhanyavaad|bataye|theek hai)\b/.test(normalized)) return 'hi';
  if (/\b(what|which|where|when|how|tell|please|can you|do you|is there|fees|admission|hostel|transport|attendance|course|principal|thank|hello|hi|no|nothing|message|help|speak|boss)\b/.test(normalized)) return 'en';
  return SENTINEL_STATE.language ?? 'en';
}

function sentinelCollegeFromText(text) {
  const value = text.toLowerCase().replace(/[.’']/g, '').replace(/[^a-z0-9\u0980-\u09ff\u0900-\u097f]+/g, ' ').trim();
  const matches = [
    { key: 'city', aliases: ['midnapore city college', 'midnapore city', 'mcc', 'মেদিনীপুর সিটি কলেজ', 'मिदनापुर सिटी कॉलेज'] },
    { key: 'rnlk', aliases: ['raja narendralal khan', 'raja narendra lal khan', 'rnlk', 'womens college', "women s college", 'নারেন্দ্রলাল খান', 'আরএনএলকে', 'महिला कॉलेज'] },
    { key: 'kd', aliases: ['k d college', 'kd college', 'k d college of commerce', 'kd college of commerce', 'কেডি কলেজ', 'के डी कॉलेज'] },
    { key: 'midnapore', aliases: ['midnapore college', 'মেদিনীপুর কলেজ', 'मिदनापुर कॉलेज'] }
  ];
  return matches.find(group => group.aliases.some(alias => value.includes(alias)))?.key ?? null;
}

function sentinelTopic(text) {
  const value = text.toLowerCase();
  if (/(application fee|apply|application|admission process|admission portal|admission procedure|ভর্তি|আবেদন|प्रवेश|आवेदन)/u.test(value)) return 'admissions';
  if (/(fee|fees|tuition|cost|price|charge|how much|কত টাকা|ফি|খরচ|শुल्क|फीस|कितना|कितनी|खर्च)/u.test(value)) return 'fees';
  if (/(hostel|accommodation|residence|হোস্টেল|আবাসন|छात्रावास|हॉस्टल)/u.test(value)) return 'hostel';
  if (/(bus|transport|route|যাতায়াত|বাস|পরিবহন|बस|परिवहन|रूट)/u.test(value)) return 'transport';
  if (/(attendance|উপস্থিতি|হাজিরা|उपस्थिति)/u.test(value)) return 'attendance';
  if (/(contact|address|location|where|phone|telephone|email|website|ঠিকানা|যোগাযোগ|ফোন|ইমেল|ওয়েবসাইট|पता|संपर्क|फोन|ईमेल|वेबसाइट)/u.test(value)) return 'contact';
  if (/(principal|director|leadership|প্রিন্সিপাল|অধ্যক্ষ|প্রধান|प्राचार्य|प्रधानाचार्य)/u.test(value)) return 'leadership';
  if (/(course|program|programme|department|subject|degree|phd|ph\.d|ug|pg|postgraduate|undergraduate|কোর্স|বিষয়|বিভাগ|পিজি|স্নাতক|सिलेबस|पाठ्यक्रम|विषय|विभाग|पीजी|स्नातक)/u.test(value)) return 'academics';
  if (/(about|profile|established|founded|accreditation|naac|affiliat|college|কলেজ সম্পর্কে|পরিচিতি|कॉलेज के बारे में)/u.test(value)) return 'profile';
  return null;
}

function sentinelReplyForTopic(collegeKey, topic, language, question = '') {
  const college = SENTINEL_COLLEGES[collegeKey];
  const words = SENTINEL_TEXT[language];
  const lead = language === 'bn' ? `স্যার/ম্যাডাম, ${college.name} সম্পর্কে যাচাইকৃত তথ্য:` :
    language === 'hi' ? `सर/मैडम, ${college.name} की सत्यापित जानकारी:` :
      `Sir/Madam, verified information for ${college.name}:`;

  if (collegeKey === 'kd' && /(pg|postgraduate|master|স্নাতকোত্তর|পিজি|पीजी|परास्नातक)/i.test(question)) {
    return language === 'bn'
      ? 'স্যার/ম্যাডাম, K.D. College শুধুমাত্র স্নাতক স্তরের কলেজ। এখানে কোনো PG বা স্নাতকোত্তর প্রোগ্রাম নেই।'
      : language === 'hi'
        ? 'सर/मैडम, K.D. College केवल स्नातक स्तर का कॉलेज है। यहाँ कोई PG या परास्नातक कार्यक्रम नहीं है।'
        : 'Sir/Madam, K.D. College is undergraduate only. It does not offer any PG programmes.';
  }

  if (topic === 'admissions') return `${lead}\n${college.admissions}`;
  if (topic === 'fees') {
    const course = question.match(/\b(b\.?\s?c\.?\s?a\.?|bca|b\.?\s?com|bcom|b\.?\s?sc|bsc|b\.?\s?a|ba|mca|mba|mha|bmlt|bpES|agriculture|microbiology|nutrition|physics|chemistry|mathematics|math|english|bengali|geography)\b/i)?.[0];
    const selected = course
      ? college.fees.filter(line => line.toLowerCase().replace(/[^a-z0-9]/g, '').includes(course.toLowerCase().replace(/[^a-z0-9]/g, '')))
      : [];
    const detail = selected.length ? selected : college.fees;
    const heading = language === 'bn' ? 'প্রকাশিত ফি (প্রোগ্রামভিত্তিক):' :
      language === 'hi' ? 'प्रकाशित शुल्क (कार्यक्रम के अनुसार):' : 'Published fees (by programme):';
    const caveat = language === 'bn' ? '\nফি পরিবর্তিত হতে পারে; আবেদনের আগে কলেজের অফিসিয়াল ওয়েবসাইটে যাচাই করুন।' :
      language === 'hi' ? '\nशुल्क बदल सकता है; आवेदन से पहले कॉलेज की आधिकारिक वेबसाइट पर पुष्टि करें।' :
        '\nFees may change; please confirm on the official college website before applying.';
    return `${lead}\n${heading}\n• ${detail.join('\n• ')}${caveat}`;
  }
  if (topic === 'hostel') return `${lead}\n${college.hostel}`;
  if (topic === 'transport') return `${lead}\n${college.transport}`;
  if (topic === 'attendance') return `${lead}\n${college.attendance}`;
  if (topic === 'contact') return `${lead}\n${college.contact}`;
  if (topic === 'leadership') return `${lead}\n${college.principal ?? college.leadership ?? 'Leadership details are not included in the verified information.'}`;
  if (topic === 'academics') {
    return `${lead}\n${college.academics}${college.shifts ? `\n${college.shifts}` : ''}`;
  }
  if (topic === 'profile') {
    return `${lead}\n${college.profile}${college.principal ? `\nPrincipal: ${college.principal}` : ''}${college.leadership ? `\nLeadership: ${college.leadership}` : ''}`;
  }
  return words.unsupported;
}

function sentinelRespond(question) {
  const language = sentinelLanguage(question);
  SENTINEL_STATE.language = language;
  const words = SENTINEL_TEXT[language];
  const text = question.toLowerCase().replace(/[.,!?]+/g, ' ').replace(/\s+/g, ' ').trim();

  if (SENTINEL_STATE.awaitingBossMessage) {
    SENTINEL_STATE.awaitingBossMessage = false;
    return { reply: words.messageTaken, language };
  }
  if (SENTINEL_STATE.awaitingBossMessageChoice) {
    SENTINEL_STATE.awaitingBossMessageChoice = false;
    if (/(message|take a message|বার্তা|মেসেজ|संदेश|मैसेज|बता दीजिए)/iu.test(text)) {
      SENTINEL_STATE.awaitingBossMessage = true;
      return { reply: words.messagePrompt, language };
    }
    if (/(college|academic|information|help|তথ্য|সাহায্য|কলেজ|जानकारी|मदद|कॉलेज)/iu.test(text)) {
      return { reply: words.offerHelp, language };
    }
    SENTINEL_STATE.awaitingBossMessageChoice = true;
    return { reply: words.boss, language };
  }

  if (/(date of birth|birth date|dob|aadhaar|aadhar|roll number|student.?s? personal|student.{0,30}(phone|number|aadhaar|aadhar|roll|birth)|personal phone|private number|class routine|internal routine|routine|জন্মতারিখ|রোল নম্বর|আধার|ব্যক্তিগত|ক্লাস রুটিন|जन्मतिथि|रोल नंबर|आधार|निजी|कक्षा की दिनचर्या)/iu.test(text)) {
    return { reply: words.private, language };
  }
  if (/(speak to (the )?(boss|owner|sir)|talk to (the )?(boss|owner)|boss|my boss|বসের সাথে|বসের সঙ্গে|বসকে|স্যারের সাথে কথা|স্যারের সঙ্গে কথা|बॉस से|बॉस से बात)/iu.test(text)) {
    SENTINEL_STATE.awaitingBossMessageChoice = true;
    return { reply: words.boss, language };
  }
  if (SENTINEL_STATE.awaitingConclusion && /^(no|nope|no nothing else|no nothing more|nothing else|nothing more|না|না আর কিছু নেই|আর কিছু নেই|नहीं|कुछ नहीं|नहीं कुछ नहीं|কল কাটতে পারো|কল কেটে দিন|कॉल काट सकते हैं|कॉल समाप्त करें)$/iu.test(text)) {
    SENTINEL_STATE.awaitingConclusion = false;
    return { reply: words.goodbye, language };
  }
  if (/(^(thank you|thanks|bye|goodbye|okay|ok)\b|ধন্যবাদ|শুকরিয়া|শুক্রিয়া|বিদায়|আবার দেখা হবে|अलविदा|फिर मिलेंगे|ঠিক আছে|ठीक है|কল কাটতে পারো|কল কেটে দিন|कॉल काट सकते हैं|कॉल समाप्त करें)/iu.test(text)) {
    SENTINEL_STATE.awaitingConclusion = true;
    return { reply: words.fulfilled, language };
  }
  if (SENTINEL_STATE.awaitingConclusion && /^(no|nope|no nothing else|no nothing more|nothing else|nothing more|না|না আর কিছু নেই|আর কিছু নেই|নहीं|कुछ नहीं|नहीं कुछ नहीं|কল কাটতে পারো|কল কেটে দিন)$/iu.test(text)) {
    SENTINEL_STATE.awaitingConclusion = false;
    return { reply: words.goodbye, language };
  }
  if (SENTINEL_STATE.awaitingConclusion) {
    SENTINEL_STATE.awaitingConclusion = false;
  }

  const collegeKey = sentinelCollegeFromText(question);
  if (collegeKey) {
    SENTINEL_STATE.college = collegeKey;
    if (SENTINEL_STATE.pendingTopic) {
      const topic = SENTINEL_STATE.pendingTopic;
      const originalQuestion = SENTINEL_STATE.pendingQuestion;
      SENTINEL_STATE.pendingTopic = null;
      SENTINEL_STATE.pendingQuestion = null;
      return { reply: sentinelReplyForTopic(collegeKey, topic, language, originalQuestion ?? question), language };
    }
    if (!sentinelTopic(question)) {
      const selected = SENTINEL_COLLEGES[collegeKey].name;
      const greeting = language === 'bn' ? `বুঝেছি, স্যার/ম্যাডাম—${selected}। কী জানতে চান?` :
        language === 'hi' ? `समझ गया/गई, सर/मैडम—${selected}। आप क्या जानना चाहते हैं?` :
          `Understood, Sir/Madam—you’re asking about ${selected}. What would you like to know?`;
      return { reply: greeting, language };
    }
  }

  const topic = sentinelTopic(question);
  if (!topic) {
    if (/^(hi|hello|hey|নমস্কার|নমস্তে|হ্যালো|नमस्ते|हैलो)\W*$/iu.test(text)) {
      return { reply: words.greet, language };
    }
    if (/which colleges|supported colleges|কোন কোন কলেজ|কোন কলেজ|कौन से कॉलेज|कौन-कौन से कॉलेज/iu.test(text)) {
      return { reply: words.list, language };
    }
    return { reply: words.unsupported, language };
  }

  if (!SENTINEL_STATE.college) {
    SENTINEL_STATE.pendingTopic = topic;
    SENTINEL_STATE.pendingQuestion = question;
    return { reply: words.askCollege, language };
  }
  return { reply: sentinelReplyForTopic(SENTINEL_STATE.college, topic, language, question), language };
}

function appendSentinelMessage(message, sender) {
  const box = document.getElementById('aiChatMessages');
  if (!box) return;
  const bubble = document.createElement('div');
  bubble.className = `assistant-message assistant-message-${sender}`;
  bubble.textContent = message;
  box.appendChild(bubble);
  box.scrollTop = box.scrollHeight;
}

function sendAIPrompt() {
  const input = document.getElementById('aiPromptInput');
  const text = input.value.trim();
  if (!text) return;

  appendSentinelMessage(text, 'user');
  input.value = '';

  const { reply } = sentinelRespond(text);
  appendSentinelMessage(reply, 'bot');
}

// 15-second local demo QR countdown.
setInterval(() => {
  STATE.qrSecondsLeft -= 1;
  if (STATE.qrSecondsLeft <= 0) {
    STATE.qrSecondsLeft = 15;
    STATE.qrToken = `DEMO-QR-${Math.floor(1000 + Math.random() * 9000)}`;
  }
  const sidebarTimer = document.getElementById('sidebarQrTimer');
  if (sidebarTimer) sidebarTimer.textContent = `Refresh: ${STATE.qrSecondsLeft}s`;
  const badge = document.getElementById('qrCountdownBadge');
  if (badge) badge.textContent = `Rotates in ${STATE.qrSecondsLeft}s`;
  const tokenText = document.getElementById('liveQrTokenText');
  if (tokenText) tokenText.textContent = STATE.qrToken;
  const phoneTimer = document.getElementById('phoneQrTimer');
  if (phoneTimer) phoneTimer.textContent = `${STATE.qrSecondsLeft}s`;
}, 1000);

// ============================================================================
// 8. UTILITY HANDLERS
// ============================================================================

function switchView(viewName) {
  STATE.view = viewName;
  document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById(`tab-${viewName}`);
  if (btn) btn.classList.add('active');
  renderApp();
}

function changeCampus(campusKey) {
  STATE.campus = campusKey;
  const c = STATE.campuses[campusKey];
  document.querySelectorAll('#campusSwitcher, #campusSwitcherTop').forEach(select => {
    select.value = campusKey;
  });
  document.querySelectorAll('.campus-network-node').forEach(node => {
    const active = node.dataset.campus === campusKey;
    node.classList.toggle('is-active', active);
    node.setAttribute('aria-pressed', String(active));
  });
  document.getElementById('topSubdomainBar').textContent = `Demo campus: ${c.name}`;
  document.getElementById('campusOverviewName').textContent = c.name;
  document.getElementById('campusOverviewStudents').textContent = c.students.toLocaleString();
  document.getElementById('campusOverviewFaculty').textContent = c.faculty.toLocaleString();
  document.getElementById('campusOverviewAttendance').textContent = c.attendance;
  pushToast(`Tenant Switched: ${c.name}`, 'indigo');
  renderApp();
}

function changeUserRole(roleKey) {
  STATE.role = roleKey;
  const r = STATE.roles[roleKey];
  document.getElementById('headerUserName').textContent = r.name;
  document.getElementById('headerUserRole').textContent = r.portal;
  document.getElementById('headerAvatar').textContent = r.avatar;
  pushToast(`Role Active: ${r.name}`, 'emerald');
  renderApp();
}

function switchLanguage(lang) {
  STATE.lang = lang;
  const dict = LANG_DICT[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (dict[k]) el.textContent = dict[k];
  });
  pushToast(`Regional Language Switched: ${lang.toUpperCase()}`, 'indigo');
}

function runMeilisearch(q) {
  const drop = document.getElementById('searchDropdown');
  if (!q.trim()) {
    drop.classList.add('hidden');
    return;
  }
  const results = STATE.searchRecords.filter(r =>
    r.title.toLowerCase().includes(q.toLowerCase()) ||
    r.info.toLowerCase().includes(q.toLowerCase())
  );
  drop.classList.remove('hidden');
  drop.innerHTML = results.length
    ? results.map(r => `
        <div class="p-2.5 hover:bg-slate-800 rounded-xl cursor-pointer border-b border-slate-800/60 last:border-0">
          <div class="flex justify-between text-xs font-bold text-white">
            <span>${r.title}</span>
            <span class="text-[10px] font-mono text-indigo-300">${r.category}</span>
          </div>
          <p class="text-[11px] text-slate-400 mt-0.5">${r.info}</p>
        </div>
      `).join('')
    : `<p class="text-xs text-slate-400 p-2">No demo search results found.</p>`;
}

function forceRotateQR() {
  STATE.qrSecondsLeft = 15;
  STATE.qrToken = `DEMO-QR-${Math.floor(1000 + Math.random() * 9000)}`;
  pushToast(`New demo QR token: ${STATE.qrToken}`, 'emerald');
  renderApp();
}

async function vaultRequest(endpoint, options = {}) {
  const headers = new Headers(options.headers || {});
  if (options.body && !headers.has('Content-Type')) headers.set('Content-Type', 'application/json');
  const response = await fetch(endpoint, { ...options, headers, credentials: 'same-origin' });
  let payload;
  try {
    payload = await response.json();
  } catch {
    throw new Error('The local data service returned an invalid response. Start the app with npm start.');
  }
  if (!response.ok) {
    const error = new Error(payload.error || 'The data request failed.');
    error.status = response.status;
    throw error;
  }
  return payload;
}

function showVaultView(activeView) {
  ['vaultSetupView', 'vaultLoginView', 'vaultDashboardView'].forEach(id => {
    document.getElementById(id).classList.toggle('hidden', id !== activeView);
  });
}

function setVaultMessage(id, message) {
  document.getElementById(id).textContent = message;
}

async function openDataVault() {
  resetVaultPasswordVisibility();
  const layer = document.getElementById('dataVaultLayer');
  layer.classList.remove('hidden');
  setVaultMessage('vaultSetupMessage', '');
  setVaultMessage('vaultLoginMessage', '');
  try {
    const status = await vaultRequest('/api/auth/status');
    if (status.authenticated) {
      await vaultRequest('/api/auth/logout', { method: 'POST', body: '{}' });
    }
    vaultAuthenticated = false;
    showVaultView(status.configured ? 'vaultLoginView' : 'vaultSetupView');
    document.getElementById(status.configured ? 'vaultLoginPassword' : 'vaultSetupPassword').focus();
  } catch (error) {
    vaultAuthenticated = false;
    showVaultView('vaultLoginView');
    setVaultMessage('vaultLoginMessage', 'Local data service is not running. Start it with npm start, then reopen the vault.');
  }
}

function resetVaultPasswordVisibility() {
  document.querySelectorAll('.vault-password-toggle').forEach(button => {
    button.closest('.vault-password-wrap').querySelector('input').type = 'password';
    button.setAttribute('aria-pressed', 'false');
    button.setAttribute('aria-label', button.dataset.hideLabel?.replace(/^Hide /, 'Show ') || button.getAttribute('aria-label'));
    button.innerHTML = '<i data-lucide="eye" class="w-4 h-4" aria-hidden="true"></i>';
  });
  if (window.lucide) lucide.createIcons();
}

async function closeDataVault() {
  document.getElementById('dataVaultLayer').classList.add('hidden');
  document.getElementById('vaultSetupPassword').value = '';
  document.getElementById('vaultSetupConfirm').value = '';
  document.getElementById('vaultLoginPassword').value = '';
  resetVaultPasswordVisibility();
  if (vaultAuthenticated) {
    try {
      await vaultRequest('/api/auth/logout', { method: 'POST', body: '{}' });
      vaultAuthenticated = false;
    } catch (error) {
      pushToast(`Admin sign-out failed: ${error.message}`, 'rose');
    }
  }
}

function toggleVaultPassword(inputId, button) {
  const input = document.getElementById(inputId);
  const isVisible = input.type === 'text';
  input.type = isVisible ? 'password' : 'text';
  button.dataset.hideLabel ||= button.getAttribute('aria-label').replace(/^Show /, 'Hide ');
  button.setAttribute('aria-pressed', String(!isVisible));
  button.setAttribute('aria-label', `${isVisible ? 'Show' : 'Hide'} ${button.dataset.hideLabel.replace(/^(Show|Hide) /, '')}`);
  button.innerHTML = `<i data-lucide="${isVisible ? 'eye' : 'eye-off'}" class="w-4 h-4" aria-hidden="true"></i>`;
  if (window.lucide) lucide.createIcons();
}

async function createVaultAdmin(event) {
  event.preventDefault();
  const password = document.getElementById('vaultSetupPassword').value;
  const confirmation = document.getElementById('vaultSetupConfirm').value;
  if (password.length < 12) {
    setVaultMessage('vaultSetupMessage', 'Use at least 12 characters for the admin passphrase.');
    return;
  }
  if (password !== confirmation) {
    setVaultMessage('vaultSetupMessage', 'The passphrases do not match.');
    return;
  }
  try {
    await vaultRequest('/api/auth/setup', { method: 'POST', body: JSON.stringify({ password }) });
    document.getElementById('vaultSetupPassword').value = '';
    document.getElementById('vaultSetupConfirm').value = '';
    await signInVault(password);
  } catch (error) {
    setVaultMessage('vaultSetupMessage', error.message);
  }
}

async function signInVault(password) {
  try {
    await vaultRequest('/api/auth/login', { method: 'POST', body: JSON.stringify({ password }) });
    vaultAuthenticated = true;
    document.getElementById('vaultLoginPassword').value = '';
    showVaultView('vaultDashboardView');
    await loadVaultData();
  } catch (error) {
    vaultAuthenticated = false;
    setVaultMessage('vaultLoginMessage', error.message);
  } finally {
    document.getElementById('vaultLoginPassword').value = '';
  }
}

async function loginVault(event) {
  event.preventDefault();
  const password = document.getElementById('vaultLoginPassword').value;
  await signInVault(password);
}

function escapeVaultValue(value) {
  return String(value ?? '').replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

async function loadVaultData() {
  if (!vaultAuthenticated) return;
  try {
    const summary = await vaultRequest('/api/admin/summary');
    const labels = {
      campuses: 'Campuses',
      students: 'Students',
      admissions: 'Applications',
      attendance: 'Attendance',
      fees: 'Payments',
      notifications: 'Notifications'
    };
    document.getElementById('vaultSummary').innerHTML = Object.entries(labels).map(([key, label]) => `
      <div class="vault-summary-card"><span>${label}</span><strong>${Number(summary.counts[key] || 0).toLocaleString()}</strong></div>
    `).join('');
    await loadVaultRecords();
  } catch (error) {
    if (error.status === 401) {
      vaultAuthenticated = false;
      showVaultView('vaultLoginView');
    }
    setVaultMessage('vaultLoginMessage', error.message);
  }
}

async function loadVaultRecords() {
  if (!vaultAuthenticated) return;
  const type = document.getElementById('vaultRecordType').value;
  const target = document.getElementById('vaultRecords');
  const count = document.getElementById('vaultRecordCount');
  target.innerHTML = '<p class="vault-empty-state">Loading protected records…</p>';
  try {
    const result = await vaultRequest(`/api/admin/records?type=${encodeURIComponent(type)}`);
    const records = result.records;
    count.textContent = `${records.length} ${records.length === 1 ? 'record' : 'records'}`;
    if (!records.length) {
      target.innerHTML = '<p class="vault-empty-state">No records saved in this category yet.</p>';
      return;
    }
    const columns = Object.keys(records[0]);
    target.innerHTML = `
      <table class="vault-records-table">
        <thead><tr>${columns.map(column => `<th>${escapeVaultValue(column.replaceAll('_', ' '))}</th>`).join('')}</tr></thead>
        <tbody>${records.map(record => `<tr>${columns.map(column => {
          const value = column === 'amount_paise'
            ? `₹${(Number(record[column]) / 100).toLocaleString('en-IN', { minimumFractionDigits: 2 })}`
            : record[column];
          return `<td>${escapeVaultValue(value)}</td>`;
        }).join('')}</tr>`).join('')}</tbody>
      </table>
    `;
  } catch (error) {
    target.innerHTML = `<p class="vault-empty-state">${escapeVaultValue(error.message)}</p>`;
    if (error.status === 401) {
      vaultAuthenticated = false;
      showVaultView('vaultLoginView');
    }
  }
}

async function logoutDataVault() {
  try {
    await vaultRequest('/api/auth/logout', { method: 'POST', body: '{}' });
  } catch (error) {
    setVaultMessage('vaultLoginMessage', error.message);
    return;
  }
  vaultAuthenticated = false;
  showVaultView('vaultLoginView');
  setVaultMessage('vaultLoginMessage', 'You have signed out.');
}

async function requireVaultForWrite() {
  if (vaultAuthenticated) return true;
  pushToast('Admin sign-in is required to save this record.', 'amber');
  await openDataVault();
  return false;
}

async function simulateAttendanceScan() {
  if (!await requireVaultForWrite()) return;
  try {
    await vaultRequest('/api/admin/attendance', {
      method: 'POST',
      body: JSON.stringify({
        campusId: STATE.campus,
        studentNumber: STATE.student.id,
        token: STATE.qrToken,
        distanceMeters: 14
      })
    });
    pushToast(`Attendance record saved. Token ${STATE.qrToken} + 14m GPS Geo-fence OK.`, 'emerald');
    await loadVaultData();
  } catch (error) {
    pushToast(error.message, 'rose');
  }
}

async function simulateUpiWebhook() {
  if (!await requireVaultForWrite()) return;
  const timestamp = Date.now();
  STATE.lastDemoFee = {
    utrNumber: `DEMO-UPI-${timestamp}`,
    invoiceNumber: `DEMO-GST-${timestamp}`
  };
  try {
    await vaultRequest('/api/admin/fees', {
      method: 'POST',
      body: JSON.stringify({
        campusId: STATE.campus,
        studentNumber: STATE.student.id,
        amount: 42500,
        description: 'Demo tuition, hostel and tax payment',
        utrNumber: STATE.lastDemoFee.utrNumber,
        invoiceNumber: STATE.lastDemoFee.invoiceNumber
      })
    });
    pushToast('Demo payment saved in the protected database. Opening sample receipt…', 'emerald');
    openPdfModal('feereceipt');
    await loadVaultData();
  } catch (error) {
    pushToast(error.message, 'rose');
  }
}

async function handleAdmissionSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const data = new FormData(form);
  try {
    const result = await vaultRequest('/api/admissions', {
      method: 'POST',
      body: JSON.stringify({
        campusId: STATE.campus,
        applicantName: data.get('applicantName'),
        guardianName: data.get('guardianName'),
        program: data.get('program'),
        address: data.get('address')
      })
    });
    form.reset();
    pushToast(`Application ${result.id} saved. It is visible only in the Admin Data Vault.`, 'emerald');
  } catch (error) {
    pushToast(error.message, 'rose');
  }
}

async function pushSocketEvent() {
  if (!await requireVaultForWrite()) return;
  const notification = {
    title: 'Demo Bus A crossed Central Stop',
    detail: 'Sample Socket.IO alert • ETA 6 minutes',
    time: 'Just now',
    unread: true
  };
  try {
    await vaultRequest('/api/admin/notifications', {
      method: 'POST',
      body: JSON.stringify({ campusId: STATE.campus, title: notification.title, detail: notification.detail })
    });
  } catch (error) {
    pushToast(error.message, 'rose');
    return;
  }
  STATE.notifications.unshift({
    ...notification
  });
  renderNotifications();
  pushToast('Sample Socket.IO alert: Demo Bus A crossed Central Stop.', 'indigo');
  await loadVaultData();
}

function renderNotifications() {
  const list = document.getElementById('notificationList');
  const badge = document.getElementById('bellBadge');
  const summary = document.getElementById('notificationSummary');
  if (!list || !badge || !summary) return;

  const unreadCount = STATE.notifications.filter(notification => notification.unread).length;
  badge.textContent = unreadCount > 99 ? '99+' : String(unreadCount);
  badge.classList.toggle('hidden', unreadCount === 0);
  summary.textContent = unreadCount
    ? `${unreadCount} unread • Recent campus updates`
    : 'You’re all caught up';
  list.replaceChildren();

  if (STATE.notifications.length === 0) {
    const emptyState = document.createElement('p');
    emptyState.className = 'notification-empty';
    emptyState.textContent = 'No notifications yet.';
    list.appendChild(emptyState);
    return;
  }

  STATE.notifications.forEach(notification => {
    const item = document.createElement('article');
    item.className = `notification-item${notification.unread ? ' is-unread' : ''}`;

    const marker = document.createElement('span');
    marker.className = 'notification-marker';
    marker.setAttribute('aria-hidden', 'true');

    const content = document.createElement('div');
    content.className = 'notification-content';
    const title = document.createElement('p');
    title.className = 'notification-title';
    title.textContent = notification.title;
    const detail = document.createElement('p');
    detail.className = 'notification-detail';
    detail.textContent = notification.detail;

    const time = document.createElement('time');
    time.className = 'notification-time';
    time.textContent = notification.time;

    content.append(title, detail);
    item.append(marker, content, time);
    list.appendChild(item);
  });
}

function toggleNotifications(forceOpen) {
  const panel = document.getElementById('notificationPanel');
  const toggle = document.getElementById('notificationToggle');
  if (!panel || !toggle) return;

  const isOpen = forceOpen ?? panel.classList.contains('hidden');
  panel.classList.toggle('hidden', !isOpen);
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Close notifications' : 'Open notifications');
  if (isOpen) renderNotifications();
}

async function markNotificationsRead() {
  if (!await requireVaultForWrite()) return;
  try {
    await vaultRequest('/api/admin/notifications/read-all', { method: 'POST', body: '{}' });
  } catch (error) {
    pushToast(error.message, 'rose');
    return;
  }
  STATE.notifications.forEach(notification => {
    notification.unread = false;
  });
  renderNotifications();
  await loadVaultData();
}

function pushToast(msg, color = 'indigo') {
  const stack = document.getElementById('toastStack');
  const item = document.createElement('div');
  item.className = `p-3.5 rounded-xl bg-slate-900/95 border border-${color}-500/50 text-xs text-white shadow-2xl flex items-center gap-2.5 pointer-events-auto`;
  item.innerHTML = `<span class="w-2 h-2 rounded-full bg-${color}-400 animate-ping"></span><span>${msg}</span>`;
  stack.appendChild(item);
  setTimeout(() => item.remove(), 3800);
}

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('pointerdown', startAdminHold);
  document.addEventListener('pointermove', moveAdminHold);
  document.addEventListener('pointerup', cancelAdminHold);
  document.addEventListener('pointercancel', cancelAdminHold);
  document.addEventListener('pointerleave', cancelAdminHold);
  const activeCampus = STATE.campuses[STATE.campus];
  document.getElementById('campusOverviewName').textContent = activeCampus.name;
  document.getElementById('campusOverviewStudents').textContent = activeCampus.students.toLocaleString();
  document.getElementById('campusOverviewFaculty').textContent = activeCampus.faculty.toLocaleString();
  document.getElementById('campusOverviewAttendance').textContent = activeCampus.attendance;
  renderApp();
  renderNotifications();

  document.getElementById('vaultSetupForm').addEventListener('submit', createVaultAdmin);
  document.getElementById('vaultLoginForm').addEventListener('submit', loginVault);
  document.getElementById('dataVaultLayer').addEventListener('click', event => {
    if (adminHoldTriggered && event.target.id === 'dataVaultLayer') {
      event.preventDefault();
      event.stopImmediatePropagation();
      adminHoldTriggered = false;
      return;
    }
    if (event.target.id === 'dataVaultLayer') closeDataVault();
  });

  document.addEventListener('click', event => {
    const control = document.querySelector('.notification-control');
    if (control && !control.contains(event.target)) toggleNotifications(false);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') toggleNotifications(false);
    if (event.key === 'Escape') closeDataVault();
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      document.getElementById('globalSearchInput').focus();
    }
  });
});