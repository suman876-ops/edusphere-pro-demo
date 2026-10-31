# EduSphere Pro — static demo

Front-end demo of the EduSphere multi-campus college ERP, published as a static site.

The original project also ships a local Node.js + SQLite server (`server.js`) that powers the
Admin Data Vault, admissions API and attendance/fee writes. That backend binds to loopback only
and does not run on static hosting, so on this deployment the data-vault screens show
"Local data service is not running" - everything else (dashboard, campus switcher, analytics,
demo data) works as a UI demo.

To run the full app locally: `npm start` (Node 22.13+) and open http://127.0.0.1:8002/.
