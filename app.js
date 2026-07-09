// ============================================================
// Raipur Station Development Project — Telecom Sheet Data & App
// ============================================================

// ---- ALL DATA ----

const DATA = {

// ======================== SUMMARY TAB ========================
summary: {
    cards: [
        { label: 'Total Estimated Cost', value: '₹48.75 Cr', sub: 'Telecommunication Package', cls: 'blue' },
        { label: 'OFC Length', value: '126 km', sub: 'Optical Fiber Cable (all types)', cls: 'cyan' },
        { label: 'CCTV Cameras', value: '312', sub: 'IP-based HD/4K cameras', cls: 'green' },
        { label: 'Wi-Fi Access Points', value: '96', sub: 'Indoor + Outdoor APs', cls: 'purple' },
        { label: 'PA Speakers', value: '248', sub: 'Ceiling + Horn + Column', cls: 'amber' },
        { label: 'LED Displays', value: '68', sub: 'IVRS + COIS + TIDS boards', cls: 'red' },
    ],
    overviewTable: {
        headers: ['S.No', 'Work Component', 'Description', 'Qty / Scope', 'Estimated Cost (₹ Lakhs)', 'Status'],
        rows: [
            [1, 'Optical Fiber Cable (OFC) Network', 'Underground & aerial OFC for backbone, LAN, signalling & telecom', '126 km', '485.00', 'Planned'],
            [2, 'IP-MPLS Network', 'Core routers, distribution switches, access layer, NMS', '1 system', '320.00', 'Tender'],
            [3, 'Unified Communication System', 'IP-PBX, VoIP phones, conference units, IVR', '1 system', '185.00', 'Planned'],
            [4, 'Public Address System', 'Digital PA with zonal control, amplifiers, speakers, mixers', '248 speakers', '142.00', 'In Progress'],
            [5, 'Passenger Information System (TIDS/COIS)', 'LED/LCD display boards, IVRS kiosks, coach indicators', '68 displays', '275.00', 'Tender'],
            [6, 'CCTV Video Surveillance', 'IP cameras (4K/2MP), NVRs, VMS, analytics, storage', '312 cameras', '890.00', 'In Progress'],
            [7, 'Wi-Fi & Internet Connectivity', 'Enterprise Wi-Fi 6 APs, controllers, bandwidth gateway', '96 APs', '165.00', 'Planned'],
            [8, 'Train Management System (TMS)', 'Integrated train tracking, platform allocation, control centre', '1 system', '425.00', 'Planned'],
            [9, 'Clock Synchronization System', 'GPS master clock, NTP server, slave clocks (digital)', '85 clocks', '62.00', 'Planned'],
            [10, 'Cable Management System', 'Cable trays, conduits, manholes, junction boxes', 'Lot', '210.00', 'In Progress'],
            [11, 'Power Supply for Telecom', 'UPS, SMPS, batteries, power distribution for all telecom', 'Lot', '380.00', 'Planned'],
            [12, 'Earthing & Lightning Protection', 'Chemical earthing, SPDs, lightning arresters for telecom', 'Lot', '95.00', 'Planned'],
            [13, 'Equipment Room Fit-out', 'Telecom room civil, AC, fire suppression, raised floor, DG', '3 rooms', '245.00', 'Planned'],
            [14, 'Testing, Commissioning & Documentation', 'End-to-end testing, OTDR, acceptance, as-built drawings', 'Lot', '68.00', 'Planned'],
            [15, 'Integration & Centralised Monitoring', 'ICCC dashboard, SCADA integration, API gateways', '1 system', '328.00', 'Planned'],
        ]
    }
},

// ======================== OFC & CABLING ========================
ofc: {
    sections: [
        {
            title: 'Optical Fiber Cable (OFC) — Backbone & Distribution',
            subtitle: 'Underground & Aerial OFC for telecom backbone',
            icon: '🔌', iconCls: 'cyan',
            headers: ['S.No', 'Item Description', 'Specification', 'Unit', 'Quantity', 'Rate (₹)', 'Amount (₹ Lakhs)', 'Location / Route'],
            rows: [
                [1, 'Single Mode OFC — 24 Fibre', 'G.652D, LSZH, armored, IS 15785', 'km', '32', '38,500', '12.32', 'Station to SECR HQ / OLT exchange'],
                [2, 'Single Mode OFC — 12 Fibre', 'G.652D, LSZH, armored', 'km', '28', '24,800', '6.94', 'Platform to equipment rooms'],
                [3, 'Single Mode OFC — 6 Fibre', 'G.652D, LSZH, armored', 'km', '18', '16,200', '2.92', 'Intra-building drops'],
                [4, 'Multi Mode OFC — 12 Fibre (OM4)', 'OM4, 50/125µm, LSZH', 'km', '8', '32,000', '2.56', 'Data centre interconnects'],
                [5, 'Aerial OFC — 24 Fibre (ADSS)', 'ADSS, G.652D, span 80m', 'km', '14', '42,000', '5.88', 'Yard area & over-bridge spans'],
                [6, 'OFC — 48 Fibre (Trunk)', 'G.652D, jelly-filled, armored', 'km', '12', '72,000', '8.64', 'Main trunk ring — station campus'],
                [7, 'OFC — 96 Fibre (Ring backbone)', 'G.652D, ribbon type, armored', 'km', '8', '1,15,000', '9.20', 'Metro ring backbone future-proof'],
                [8, 'Micro-duct Cable — 12 Fibre', 'Blown fiber, micro-duct system', 'km', '6', '28,500', '1.71', 'Concourse & commercial area'],
            ],
            totals: ['', '', '', '', '126 km', '', '50.17', '']
        },
        {
            title: 'OFC Accessories & Passive Components',
            subtitle: 'Joints, patch panels, splice closures, connectors',
            icon: '🔧', iconCls: 'blue',
            headers: ['S.No', 'Item Description', 'Specification', 'Unit', 'Quantity', 'Rate (₹)', 'Amount (₹ Lakhs)'],
            rows: [
                [1, 'OFC Joint Closure (48F)', 'Heat-shrink, IP68, re-enterable', 'Nos', '64', '4,800', '3.07'],
                [2, 'OFC Joint Closure (24F)', 'Heat-shrink, IP68', 'Nos', '92', '3,200', '2.94'],
                [3, 'Fiber Patch Panel — 24 Port (Rack mount)', 'SC/APC, loaded, 19" 1U', 'Nos', '36', '12,500', '4.50'],
                [4, 'Fiber Patch Panel — 48 Port', 'SC/APC, loaded, 19" 2U', 'Nos', '12', '24,000', '2.88'],
                [5, 'SC/APC Patch Cords (SM, 3m)', 'G.657A, 3mm jacket', 'Nos', '480', '350', '1.68'],
                [6, 'SC/APC Pigtails (SM)', 'G.657A, 0.9mm, 1.5m', 'Nos', '320', '180', '0.58'],
                [7, 'OFC Splice Tray (24F)', 'ABS, with cover and holder', 'Nos', '150', '280', '0.42'],
                [8, 'Fiber Optic Distribution Frame (FDF)', '144 port, floor-standing', 'Nos', '4', '85,000', '3.40'],
                [9, 'OTDR Tested Splice — per joint', 'Fusion splice + OTDR test', 'Nos', '2400', '250', '6.00'],
                [10, 'Fiber Media Converter (GE, SM)', 'Gigabit, SC/APC, 20km', 'Nos', '48', '8,500', '4.08'],
            ]
        },
        {
            title: 'Copper Cabling',
            subtitle: 'Structured cabling — Cat6A, Cat6, telephone cables',
            icon: '📡', iconCls: 'amber',
            headers: ['S.No', 'Item Description', 'Specification', 'Unit', 'Quantity', 'Rate (₹)', 'Amount (₹ Lakhs)'],
            rows: [
                [1, 'Cat6A UTP Cable (4 Pair)', 'ANSI/TIA 568.2-D, LSZH, 500MHz', 'mtr', '45000', '42', '18.90'],
                [2, 'Cat6 UTP Cable (4 Pair)', 'ANSI/TIA 568, LSZH', 'mtr', '32000', '28', '8.96'],
                [3, 'Telephone Cable — 50 Pair', 'PE insulated, jelly filled, armored', 'km', '4.5', '1,85,000', '8.33'],
                [4, 'Telephone Cable — 20 Pair', 'PE insulated, jelly filled', 'km', '6', '82,000', '4.92'],
                [5, 'Telephone Cable — 10 Pair', 'PE insulated', 'km', '8', '45,000', '3.60'],
                [6, 'RJ45 Cat6A I/O Module', 'Toolless, shielded', 'Nos', '650', '420', '2.73'],
                [7, 'Cat6A Patch Cords (3m)', 'Shielded, LSZH', 'Nos', '600', '380', '2.28'],
                [8, '24-Port Cat6A Patch Panel', '19" 1U, loaded, shielded', 'Nos', '32', '14,500', '4.64'],
                [9, 'Face Plate — Double Gang', 'With 2x Cat6A keystone', 'Nos', '320', '280', '0.90'],
                [10, 'Krone LSA Module (10 pair)', 'For telephone cable termination', 'Nos', '120', '850', '1.02'],
            ]
        }
    ]
},

// ======================== NETWORK & IP ========================
network: {
    sections: [
        {
            title: 'IP/MPLS Core & Distribution Network',
            subtitle: 'Layer 3 backbone and distribution switches',
            icon: '🌐', iconCls: 'blue',
            headers: ['S.No', 'Equipment', 'Make / Model (Indicative)', 'Specification', 'Qty', 'Rate (₹)', 'Amount (₹ Lakhs)', 'Location'],
            rows: [
                [1, 'Core Router', 'Cisco ASR 920 / Juniper MX204', 'MPLS, BGP, 10GE x4, 1GE x12, dual PSU', '2', '18,50,000', '37.00', 'Main Telecom Room (MTR)'],
                [2, 'Distribution Switch (L3)', 'Cisco C9300-48U / Huawei S6730', '48x 1GE PoE++, 4x 10G SFP+, stackable', '8', '4,85,000', '38.80', 'Each platform / building'],
                [3, 'Access Switch (L2 PoE)', 'Cisco C9200-24P / HPE Aruba', '24x 1GE PoE+, 4x 10G, 740W', '28', '2,45,000', '68.60', 'Floor distribution rooms'],
                [4, 'Access Switch (L2 PoE) — 48 Port', 'Cisco C9200-48P', '48x 1GE PoE+, 4x 10G, 1440W', '12', '3,85,000', '46.20', 'CCTV dense zones'],
                [5, 'SFP+ Module (10G, SM, 10km)', 'Compatible / OEM', 'LC Duplex, 1310nm', '64', '12,500', '8.00', 'Core-to-distribution links'],
                [6, 'SFP Module (1G, SM, 20km)', 'Compatible / OEM', 'LC Duplex, 1310nm', '96', '4,500', '4.32', 'Access uplinks'],
                [7, 'Network Management System (NMS)', 'SolarWinds / PRTG / ManageEngine', 'Monitoring 500 nodes, SNMP, NetFlow', '1', '6,50,000', '6.50', 'MTR — NMS Server'],
                [8, 'Firewall (Next-Gen)', 'Palo Alto PA-850 / Fortinet 200F', 'NGFW, IPS, URL filtering, VPN, 5Gbps', '2', '7,80,000', '15.60', 'Internet edge (HA pair)'],
                [9, 'Load Balancer / ADC', 'F5 / Citrix', 'Application delivery, SSL offload', '1', '4,50,000', '4.50', 'MTR'],
                [10, '19" Network Rack (42U)', 'With fans, PDU, cable manager', '800x1000mm, perforated doors', '14', '38,000', '5.32', 'All telecom rooms'],
            ]
        },
        {
            title: 'Server Infrastructure',
            subtitle: 'Servers for NVR, NMS, TMS, ICCC, and applications',
            icon: '🖥️', iconCls: 'purple',
            headers: ['S.No', 'Equipment', 'Specification', 'Qty', 'Rate (₹)', 'Amount (₹ Lakhs)', 'Purpose'],
            rows: [
                [1, 'Tower/Rack Server — NVR', 'Xeon Silver, 64GB, 8x 16TB RAID6', '6', '5,20,000', '31.20', 'CCTV Video Storage (30 days)'],
                [2, 'Rack Server — TMS/ICCC', 'Xeon Gold, 128GB, 2x 1.92TB SSD, RAID', '2', '8,50,000', '17.00', 'Train Mgmt & ICCC applications'],
                [3, 'Rack Server — NMS & Monitoring', 'Xeon Silver, 64GB, 2x 960GB SSD', '1', '4,80,000', '4.80', 'Network/infra monitoring'],
                [4, 'Rack Server — PA/PIS Application', 'Xeon Silver, 32GB, 2x 480GB SSD', '1', '3,60,000', '3.60', 'PA & Passenger Info System'],
                [5, 'NAS Storage (Enterprise)', '48TB usable, RAID6, 10GE', '1', '7,50,000', '7.50', 'Backup & archival storage'],
                [6, 'KVM Console (8-port)', 'LCD 17", Cat5 KVM', '2', '1,20,000', '2.40', 'Server management'],
            ]
        }
    ]
},

// ======================== PA & DISPLAY ========================
paDisplay: {
    sections: [
        {
            title: 'Public Address (PA) System',
            subtitle: 'Digital IP-based PA with zonal control',
            icon: '📢', iconCls: 'amber',
            headers: ['S.No', 'Item Description', 'Specification', 'Unit', 'Qty', 'Rate (₹)', 'Amount (₹ Lakhs)', 'Location'],
            rows: [
                [1, 'IP-based PA Server / Controller', 'Digital, 32 zones, SIP, RDSS integration', 'Nos', '2', '4,85,000', '9.70', 'MTR (Main + Standby)'],
                [2, 'PA Zone Controller (8 Zone)', 'IP network, PoE, relay output', 'Nos', '12', '65,000', '7.80', 'Platform buildings'],
                [3, 'PA Amplifier — 500W', 'Class-D, 100V line, rack mount', 'Nos', '16', '42,000', '6.72', 'Amplifier rooms'],
                [4, 'PA Amplifier — 250W', 'Class-D, 100V line, rack mount', 'Nos', '12', '28,000', '3.36', 'Concourse areas'],
                [5, 'Ceiling Speaker (6W)', 'Metal grille, 100V line, fire rated', 'Nos', '120', '2,800', '3.36', 'Concourse, waiting halls, ticket area'],
                [6, 'Horn Speaker (15W)', 'ABS, 100V line, IP66, weatherproof', 'Nos', '64', '3,500', '2.24', 'Platforms (open area)'],
                [7, 'Column Speaker (30W)', '100V line, aluminium, wall mount', 'Nos', '48', '8,500', '4.08', 'Foot over-bridge, subway, entrance'],
                [8, 'Pendant Speaker (10W)', '100V line, suspended, dome type', 'Nos', '16', '4,200', '0.67', 'High-ceiling areas'],
                [9, 'Paging Microphone (Desktop)', 'Gooseneck, zone select, priority', 'Nos', '8', '12,500', '1.00', 'Station master room, control room'],
                [10, 'PA Cabling (2C x 1.5 sqmm, shielded)', 'FRLS, shielded speaker cable', 'mtr', '18000', '38', '6.84', 'All PA routes'],
                [11, 'Background Music Player (IP)', 'Pre-scheduled, network streaming', 'Nos', '2', '45,000', '0.90', 'MTR'],
                [12, 'PA — Auto Announcement Module', 'Multilingual (Hindi, English, Chhattisgarhi), RDSS feed', 'Nos', '2', '3,50,000', '7.00', 'Integrated with TMS'],
            ]
        },
        {
            title: 'Passenger Information Display System (PIDS)',
            subtitle: 'LED/LCD display boards — TIDS, COIS, Platform Indicators',
            icon: '📺', iconCls: 'green',
            headers: ['S.No', 'Item Description', 'Specification', 'Unit', 'Qty', 'Rate (₹)', 'Amount (₹ Lakhs)', 'Location'],
            rows: [
                [1, 'Main Concourse Display (LED, P2.5)', '3000mm x 1500mm, full color, outdoor', 'Nos', '4', '6,50,000', '26.00', 'Main entrance & concourse'],
                [2, 'Platform TIDS Board (LED, P4)', '2400mm x 600mm, tri-color, weatherproof', 'Nos', '16', '2,80,000', '44.80', 'Each platform (both ends)'],
                [3, 'Coach Indication Board (COIS)', '1800mm x 300mm, LED, coach position', 'Nos', '16', '1,85,000', '29.60', 'Platform edges'],
                [4, 'Digital Clock cum Train Info Display', '800mm x 400mm, LED, NTP synced', 'Nos', '12', '42,000', '5.04', 'Waiting areas, booking counters'],
                [5, 'Interactive Touch Kiosk (43")', '43" FHD IPS, PCAP touch, stainless steel encl.', 'Nos', '8', '2,20,000', '17.60', 'Concourse, entrance lobby'],
                [6, 'LCD Display Panel — 55"', '55" 4K, commercial grade, 700 nits, 24/7', 'Nos', '8', '95,000', '7.60', 'Waiting halls, VIP lounge'],
                [7, 'LCD Display Panel — 43"', '43" FHD, commercial grade, 500 nits', 'Nos', '4', '65,000', '2.60', 'Ticket counters, enquiry'],
                [8, 'PIDS Central Server / CMS', 'Content management, FOIS/NTES integration', 'Nos', '1', '5,50,000', '5.50', 'MTR'],
                [9, 'Media Player (per display)', 'Android/Linux, PoE, CMS client', 'Nos', '44', '18,500', '8.14', 'Behind each LCD'],
                [10, 'IVRS Kiosk (Self-service)', 'Bilingual, touch + voice, PNR, platform info', 'Nos', '4', '3,50,000', '14.00', 'Concourse & entrance'],
            ]
        }
    ]
},

// ======================== CCTV ========================
cctv: {
    sections: [
        {
            title: 'CCTV IP Camera System',
            subtitle: 'Video surveillance as per Railway Board guidelines (2023)',
            icon: '📹', iconCls: 'green',
            headers: ['S.No', 'Camera Type', 'Specification', 'Resolution', 'Qty', 'Rate (₹)', 'Amount (₹ Lakhs)', 'Coverage Area'],
            rows: [
                [1, 'IP Bullet Camera (Outdoor)', 'IR 50m, WDR, IP67, H.265+, PoE', '4 MP', '80', '18,500', '14.80', 'Platforms, parking, approach roads'],
                [2, 'IP Dome Camera (Indoor)', 'IR 30m, WDR, IK10, H.265+, PoE', '4 MP', '60', '14,200', '8.52', 'Concourse, halls, ticket area'],
                [3, 'IP PTZ Camera', '25x optical, IR 150m, auto-tracking, PoE+', '4 MP', '24', '85,000', '20.40', 'Platform overview, entrances, yard'],
                [4, 'IP Bullet Camera — 4K (Outdoor)', 'IR 80m, AI analytics, WDR, IP67', '8 MP (4K)', '32', '32,500', '10.40', 'Entry/exit gates, sensitive zones'],
                [5, 'IP Fisheye Camera (Panoramic)', '360° view, de-warping, PoE, IR 15m', '12 MP', '16', '42,000', '6.72', 'High-ceiling halls, rotunda'],
                [6, 'ANPR Camera (License Plate)', 'IR, LPR analytics, 25fps, PoE', '2 MP', '12', '65,000', '7.80', 'Parking lot entry/exit, VIP gate'],
                [7, 'IP Box Camera (Platform edge)', 'CS mount, auto-iris, WDR, day/night', '2 MP', '16', '22,000', '3.52', 'Platform edge monitoring'],
                [8, 'Thermal Camera (Perimeter)', 'VOx uncooled, analytics, 640x480', 'Thermal', '8', '1,85,000', '14.80', 'Perimeter fence, restricted areas'],
                [9, 'Body-worn Camera', 'Full HD, GPS, Wi-Fi upload, 12hr battery', '1080p', '24', '28,000', '6.72', 'RPF & GRP personnel'],
                [10, 'Face Recognition Camera', 'AI-powered, 30fps, WDR, deep learning', '2 MP', '16', '1,20,000', '19.20', 'Entry gates, wanted person alert'],
                [11, 'Crowd Density Camera', 'AI analytics, heatmap, people counting', '4 MP', '12', '55,000', '6.60', 'Platforms, concourse, FOB'],
                [12, 'Baggage Screening Camera (X-ray integration)', 'Interface with X-ray baggage scanner', '2 MP', '12', '35,000', '4.20', 'Security checkpoints'],
            ]
        },
        {
            title: 'Video Management & Storage',
            subtitle: 'NVR, VMS, video analytics, and storage',
            icon: '💾', iconCls: 'purple',
            headers: ['S.No', 'Item', 'Specification', 'Qty', 'Rate (₹)', 'Amount (₹ Lakhs)'],
            rows: [
                [1, 'NVR — 64 Channel', 'H.265+, 8x HDD bays, RAID5, dual NIC', '6', '1,85,000', '11.10'],
                [2, 'Surveillance HDD — 16TB', 'Surveillance grade, 7200RPM, 24/7', '48', '32,000', '15.36'],
                [3, 'Video Management Software (VMS)', 'Enterprise, 312 channels, failover, API', '1', '12,50,000', '12.50'],
                [4, 'Video Analytics Software', 'AI: intrusion, loitering, crowd, tripwire, face match', '1', '8,50,000', '8.50'],
                [5, 'Video Wall Controller', '4K input, 12 output, matrix switching', '1', '4,80,000', '4.80'],
                [6, 'Video Wall Display (55" narrow bezel)', '55", 3.5mm bezel, 500 nits, 24/7', '12', '1,10,000', '13.20'],
                [7, 'Operator Workstation', '27" 4K monitor, i7, 32GB, dedicated GPU', '4', '1,20,000', '4.80'],
                [8, 'Joystick Controller (PTZ)', 'IP, USB/Network, 3-axis', '4', '18,500', '0.74'],
            ]
        }
    ]
},

// ======================== TELEPHONE ========================
telephone: {
    sections: [
        {
            title: 'Unified Communication & Telephone System',
            subtitle: 'IP-PBX, VoIP, railway telecom integration',
            icon: '📞', iconCls: 'blue',
            headers: ['S.No', 'Item', 'Specification', 'Qty', 'Rate (₹)', 'Amount (₹ Lakhs)', 'Purpose'],
            rows: [
                [1, 'IP-PBX System (Enterprise)', 'SIP, 500 extensions, ISDN PRI, auto attendant', '1', '8,50,000', '8.50', 'Central telephone exchange'],
                [2, 'VoIP IP Phone (Color Display)', 'SIP, HD voice, PoE, 4 lines, Gigabit', '120', '8,500', '10.20', 'Offices, counters, cabins'],
                [3, 'VoIP IP Phone (Basic)', 'SIP, 2 lines, PoE, 10/100', '80', '4,200', '3.36', 'Staff rooms, stores, guards'],
                [4, 'IP Conference Phone', 'SIP, full-duplex, 360° mic, Bluetooth', '6', '45,000', '2.70', 'Meeting rooms, DRM office'],
                [5, 'Analog Gateway (8 FXS)', 'SIP to analog, 8 ports', '12', '28,000', '3.36', 'Legacy analog phone integration'],
                [6, 'ISDN PRI Gateway (E1)', '30 channels, SIP trunk', '2', '1,20,000', '2.40', 'PSTN / BSNL connectivity'],
                [7, 'Auto-attendant / IVR Module', 'Multilingual, menu-based, 8 ports', '1', '2,50,000', '2.50', 'Enquiry / complaint IVR'],
                [8, 'Emergency Telephone (Platform)', 'Vandal-proof, stainless steel, speed-dial, weatherproof', '16', '22,000', '3.52', 'Platform pillars, FOB, subway'],
                [9, 'Help Phone / Intercom Panel', 'Flush-mount, 1-button, full duplex, ADA compliant', '12', '15,000', '1.80', 'Divyangjan toilets, lifts, ramps'],
                [10, 'MTNL/BSNL Leased Line Interface', '2 Mbps / STM-1 termination', '2', '45,000', '0.90', 'External PSTN connectivity'],
                [11, 'Railway Autoexchange Integration', 'Interfacing with existing railway exchange', '1', '3,80,000', '3.80', 'Railway phone network (CUG)'],
                [12, 'Voice Logger / Call Recorder', '30-channel, SIP, search & playback', '1', '2,80,000', '2.80', 'Control room, complaint desk'],
            ]
        }
    ]
},

// ======================== WI-FI ========================
wifi: {
    sections: [
        {
            title: 'Wi-Fi 6 Network Infrastructure',
            subtitle: 'Enterprise-grade wireless with captive portal (RailTel integration)',
            icon: '📶', iconCls: 'purple',
            headers: ['S.No', 'Item', 'Specification', 'Qty', 'Rate (₹)', 'Amount (₹ Lakhs)', 'Location'],
            rows: [
                [1, 'Wi-Fi 6 Access Point (Indoor)', '802.11ax, MU-MIMO, 4x4:4, PoE, dual band', '56', '28,000', '15.68', 'Concourse, halls, platforms (covered)'],
                [2, 'Wi-Fi 6 Access Point (Outdoor)', '802.11ax, IP67, directional, PoE, dual band', '28', '42,000', '11.76', 'Platforms (open), parking, approach'],
                [3, 'Wi-Fi 6E Access Point (High Density)', '6 GHz tri-band, 8x8 MU-MIMO', '12', '55,000', '6.60', 'VIP lounge, food court, main concourse'],
                [4, 'Wireless LAN Controller (WLC)', 'Cloud/on-prem, 200 AP license, HA', '2', '4,50,000', '9.00', 'MTR (Primary + DR)'],
                [5, 'Captive Portal / AAA Server', 'RADIUS, SMS OTP, social login, bandwidth mgmt', '1', '3,80,000', '3.80', 'MTR'],
                [6, 'Internet Bandwidth Gateway', '1 Gbps, dual ISP, SD-WAN capable', '1', '2,50,000', '2.50', 'MTR'],
                [7, 'Internet Leased Line — 1 Gbps', 'RailTel / BSNL, 1:1, SLA 99.5%', '2 links', '—', 'Opex', 'Dual ISP for redundancy'],
                [8, 'Outdoor Sector Antenna (5 GHz)', '120° sector, 18 dBi, N-type', '8', '12,500', '1.00', 'Yard and extended platform'],
                [9, 'PoE Injector (802.3bt, 90W)', 'For outdoor APs at distance', '28', '4,500', '1.26', 'Outdoor AP locations'],
                [10, 'Wi-Fi Site Survey & Heat Map', 'Pre and post deployment RF survey', 'Lot', '1', '3,50,000', '3.50', 'Full station campus'],
            ]
        }
    ]
},

// ======================== POWER & EARTHING ========================
power: {
    sections: [
        {
            title: 'Power Supply for Telecommunication Equipment',
            subtitle: 'UPS, SMPS, batteries, and power distribution',
            icon: '⚡', iconCls: 'red',
            headers: ['S.No', 'Item', 'Specification', 'Qty', 'Rate (₹)', 'Amount (₹ Lakhs)', 'Location'],
            rows: [
                [1, 'Online UPS — 60 kVA (3-phase)', 'Double conversion, IGBT, 0.9 PF, parallel ready', '2', '9,50,000', '19.00', 'MTR (N+1 redundancy)'],
                [2, 'Online UPS — 20 kVA (3-phase)', 'Double conversion, rack/tower', '3', '3,80,000', '11.40', 'Platform telecom rooms'],
                [3, 'Online UPS — 10 kVA (Single phase)', 'Double conversion, DSP controlled', '4', '1,85,000', '7.40', 'Distributed ER rooms'],
                [4, 'Online UPS — 3 kVA (Rack mount)', 'For individual rack/NVR', '6', '65,000', '3.90', 'NVR/Switch locations'],
                [5, 'Battery Bank — 200 Ah (SMF)', '12V, 200Ah, tubular gel, 10-year design life', '48', '28,000', '13.44', 'UPS battery rooms'],
                [6, 'SMPS Power Supply — 48V DC, 50A', 'For telecom core equipment', '4', '85,000', '3.40', 'MTR & platform rooms'],
                [7, 'AC Distribution Board (Telecom)', 'MCCB, MCB, SPD, changeover', '8', '45,000', '3.60', 'All telecom rooms'],
                [8, 'DC Distribution Board — 48V', 'Fused outputs, monitoring', '4', '32,000', '1.28', 'MTR'],
                [9, 'Automatic Transfer Switch (ATS)', '100A, 4-pole, motorized changeover', '3', '55,000', '1.65', 'DG to mains changeover'],
                [10, 'Power Cables (Armored, 3C x 10 sqmm)', 'XLPE, 1.1kV, IS 7098', 'mtr', '2500', '320', '8.00', 'Main power routes'],
                [11, 'Diesel Generator — 125 kVA', 'Silent, ATS, AMF, fuel tank 500L', '1', '12,50,000', '12.50', 'Telecom DG backup'],
            ]
        },
        {
            title: 'Earthing & Lightning Protection System (ELPS)',
            subtitle: 'Chemical earthing, SPDs, lightning arresters for all telecom installations',
            icon: '🛡️', iconCls: 'teal',
            headers: ['S.No', 'Item', 'Specification', 'Qty', 'Rate (₹)', 'Amount (₹ Lakhs)'],
            rows: [
                [1, 'Chemical Earth Electrode', 'GI pipe, 3m, backfill compound, ≤1Ω', '24', '18,500', '4.44'],
                [2, 'Earth Bus Bar (Copper)', '600mm x 50mm x 6mm, tinned', '8', '8,500', '0.68'],
                [3, 'Earth Pit Chamber (Masonry)', 'With cover, inspection accessible', '24', '5,500', '1.32'],
                [4, 'Earthing Cable — 70 sqmm (Green/Yellow)', 'PVC, IS 694, copper', 'mtr', '1200', '480', '5.76'],
                [5, 'Earthing Cable — 25 sqmm', 'PVC, IS 694, copper', 'mtr', '2000', '210', '4.20'],
                [6, 'Surge Protection Device (SPD) — Type 1+2', 'For main AC panel, 100kA', '4', '42,000', '1.68'],
                [7, 'Surge Protection Device (SPD) — Type 2+3', 'For sub-distribution, 40kA', '12', '18,500', '2.22'],
                [8, 'Data Line SPD (RJ45/PoE)', 'Cat6 compatible, PoE pass-through', '48', '3,800', '1.82'],
                [9, 'Coaxial / OFC SPD', 'For antenna / OFC entry points', '16', '5,200', '0.83'],
                [10, 'Lightning Arrester (ESE type)', 'Early streamer emission, 60m radius', '3', '85,000', '2.55'],
                [11, 'Down Conductor (25mm GI tape)', 'With test clamp, route tape', 'mtr', '350', '320', '1.12'],
                [12, 'Equipotential Bonding Bar', 'In each telecom room, copper', '8', '6,500', '0.52'],
            ]
        }
    ]
},

// ======================== BILL OF MATERIALS ========================
bom: {
    sections: [
        {
            title: 'Consolidated Bill of Materials — All Telecom Work',
            subtitle: 'Component-wise consolidated quantity summary',
            icon: '📦', iconCls: 'amber',
            headers: ['S.No', 'Category', 'Item', 'Unit', 'Total Qty', 'Estimated Cost (₹ Lakhs)'],
            rows: [
                [1, 'OFC', 'Optical Fiber Cable (all types)', 'km', '126', '50.17'],
                [2, 'OFC', 'OFC Accessories (closures, patch panels, FDF)', 'Lot', '—', '29.55'],
                [3, 'Copper Cable', 'Structured Cabling (Cat6A/Cat6)', 'mtr', '77,000', '27.86'],
                [4, 'Copper Cable', 'Telephone Cables (multi-pair)', 'km', '18.5', '16.85'],
                [5, 'Network', 'Core Routers', 'Nos', '2', '37.00'],
                [6, 'Network', 'Distribution Switches (L3)', 'Nos', '8', '38.80'],
                [7, 'Network', 'Access Switches (L2 PoE)', 'Nos', '40', '114.80'],
                [8, 'Network', 'Firewall (NGFW)', 'Nos', '2', '15.60'],
                [9, 'Network', '19" Racks (42U)', 'Nos', '14', '5.32'],
                [10, 'Server', 'Servers (NVR, TMS, NMS, PA)', 'Nos', '10', '56.60'],
                [11, 'Server', 'NAS Storage', 'Nos', '1', '7.50'],
                [12, 'CCTV', 'IP Cameras (all types)', 'Nos', '312', '123.68'],
                [13, 'CCTV', 'NVR & Storage', 'Nos', '6+48 HDD', '26.46'],
                [14, 'CCTV', 'VMS & Analytics Software', 'Lot', '—', '21.00'],
                [15, 'CCTV', 'Video Wall (controller + displays)', 'Lot', '—', '18.00'],
                [16, 'PA', 'PA System (server, amps, speakers)', 'Lot', '248 speakers', '53.67'],
                [17, 'PIDS', 'LED/LCD Display Boards', 'Nos', '68', '160.88'],
                [18, 'PIDS', 'Interactive Kiosks & IVRS', 'Nos', '12', '31.60'],
                [19, 'Telephone', 'IP-PBX, VoIP Phones, Gateways', 'Lot', '250+ ext.', '45.84'],
                [20, 'Wi-Fi', 'Access Points (Indoor/Outdoor/6E)', 'Nos', '96', '34.04'],
                [21, 'Wi-Fi', 'WLC, AAA, Captive Portal', 'Lot', '—', '15.30'],
                [22, 'Power', 'UPS Systems (all ratings)', 'Nos', '15', '41.70'],
                [23, 'Power', 'Battery Banks (SMF)', 'Nos', '48', '13.44'],
                [24, 'Power', 'DG Set 125 kVA', 'Nos', '1', '12.50'],
                [25, 'Power', 'Power Distribution & Cabling', 'Lot', '—', '14.53'],
                [26, 'Earthing', 'Chemical Earthing & ELPS', 'Lot', '—', '27.14'],
                [27, 'Clock', 'GPS Master Clock & Slave Clocks', 'Nos', '85+1', '62.00'],
                [28, 'Cable Mgmt', 'Trays, Conduits, Manholes, JBs', 'Lot', '—', '210.00'],
                [29, 'Integration', 'ICCC, SCADA, API, Dashboards', 'Lot', '—', '328.00'],
                [30, 'Testing', 'Commissioning, OTDR, As-built docs', 'Lot', '—', '68.00'],
            ],
            totals: ['', '', 'GRAND TOTAL', '', '', '₹ 48.75 Cr (approx.)']
        }
    ]
},

// ======================== TIMELINE ========================
timeline: {
    sections: [
        {
            title: 'Project Timeline & Milestones',
            subtitle: 'Indicative schedule for telecommunication works',
            icon: '📅', iconCls: 'cyan',
            headers: ['S.No', 'Milestone', 'Activity', 'Start Date', 'End Date', 'Duration', 'Dependencies', 'Status'],
            rows: [
                [1, 'M1', 'Detailed Survey & Design Finalization', 'Aug 2026', 'Oct 2026', '3 months', 'Station civil design approval', 'Planned'],
                [2, 'M2', 'Tender Preparation & Floating', 'Sep 2026', 'Nov 2026', '3 months', 'DPR approval', 'Planned'],
                [3, 'M3', 'Tender Evaluation & LOA', 'Dec 2026', 'Feb 2027', '3 months', 'M2 completion', 'Planned'],
                [4, 'M4', 'Civil Works for Telecom (conduits, rooms)', 'Jan 2027', 'Jun 2027', '6 months', 'Main civil works 40% completion', 'Planned'],
                [5, 'M5', 'OFC Laying & Jointing', 'Mar 2027', 'Aug 2027', '6 months', 'Duct/conduit readiness (M4)', 'Planned'],
                [6, 'M6', 'Structured Cabling Installation', 'Apr 2027', 'Sep 2027', '6 months', 'Building structure ready', 'Planned'],
                [7, 'M7', 'Network Equipment Installation', 'Jun 2027', 'Oct 2027', '5 months', 'OFC testing complete (M5)', 'Planned'],
                [8, 'M8', 'CCTV Camera Installation', 'Jul 2027', 'Dec 2027', '6 months', 'Network ready (M7 partial)', 'Planned'],
                [9, 'M9', 'PA & PIDS Installation', 'Jul 2027', 'Nov 2027', '5 months', 'Cabling done (M6)', 'Planned'],
                [10, 'M10', 'Wi-Fi AP Deployment', 'Aug 2027', 'Nov 2027', '4 months', 'Network switches live (M7)', 'Planned'],
                [11, 'M11', 'Telephone / IP-PBX Commissioning', 'Sep 2027', 'Nov 2027', '3 months', 'Network & cabling complete', 'Planned'],
                [12, 'M12', 'UPS / Power / Earthing', 'Feb 2027', 'Aug 2027', '7 months', 'Parallel with civil works', 'Planned'],
                [13, 'M13', 'TMS / ICCC Integration', 'Sep 2027', 'Jan 2028', '5 months', 'All sub-systems commissioned', 'Planned'],
                [14, 'M14', 'Testing & Commissioning (Phase 1)', 'Nov 2027', 'Jan 2028', '3 months', 'M7-M11 complete', 'Planned'],
                [15, 'M15', 'Final Acceptance & Handover', 'Feb 2028', 'Mar 2028', '2 months', 'All tests passed', 'Planned'],
            ]
        },
        {
            title: 'Key Reference Standards & Specifications',
            subtitle: 'Indian Railways and BIS standards applicable',
            icon: '📋', iconCls: 'blue',
            headers: ['S.No', 'Standard / Specification', 'Description', 'Applicable For'],
            rows: [
                [1, 'RDSO/SPN/TC/62/2014', 'Specification for OFC for Indian Railways', 'OFC procurement & laying'],
                [2, 'RDSO/SPN/TC/64/2014', 'Specification for IP-MPLS equipment', 'Core network equipment'],
                [3, 'IS 15785:2007', 'Optical fiber cables — General specification', 'OFC cables'],
                [4, 'IEC 62305', 'Protection against lightning', 'Lightning protection system'],
                [5, 'IS 3043:2018', 'Code of practice for earthing', 'Earthing system design'],
                [6, 'ANSI/TIA-568.2-D', 'Balanced twisted-pair cabling', 'Structured cabling'],
                [7, 'ANSI/TIA-942-B', 'Telecommunications infrastructure standard for data centres', 'Telecom room design'],
                [8, 'IS/IEC 62040', 'UPS systems specification', 'UPS procurement'],
                [9, 'Railway Board Letter 2022/Tele', 'CCTV surveillance guidelines for stations', 'CCTV system design'],
                [10, 'RDSO CAMTECH/E/2019', 'Guidelines for PA systems at railway stations', 'PA system design'],
                [11, 'ITU-T G.652D', 'Single-mode optical fibre and cable', 'OFC fibre specification'],
                [12, 'IEEE 802.3bt (PoE++)', 'Power over Ethernet standard', 'PoE switch selection'],
                [13, 'IEEE 802.11ax (Wi-Fi 6)', 'WLAN standard', 'Wi-Fi access points'],
                [14, 'NBC 2016 Part 8', 'Building services — Communication', 'Building telecom design'],
            ]
        }
    ]
}

}; // END DATA


// ============================================================
// RENDERING ENGINE
// ============================================================

function renderStatusBadge(status) {
    const map = {
        'Planned': 'planned',
        'In Progress': 'in-progress',
        'Completed': 'completed',
        'Tender': 'tender',
        'Critical': 'critical'
    };
    const cls = map[status] || 'planned';
    return `<span class="status-badge ${cls}">${status}</span>`;
}

function isCurrencyCell(val) {
    if (typeof val !== 'string') return false;
    return /^[\d,]+\.\d{2}$/.test(val.replace(/\s/g, '')) || val.startsWith('₹');
}

function isNumberCell(val) {
    if (typeof val !== 'string') return false;
    return /^[\d,]+$/.test(val.replace(/\s/g, ''));
}

function isStatus(val) {
    return ['Planned', 'In Progress', 'Completed', 'Tender', 'Critical'].includes(val);
}

function renderCell(val, headerText) {
    if (isStatus(val)) return renderStatusBadge(val);
    if (typeof val === 'number') return val;
    if (isCurrencyCell(val)) return `<span class="cell-currency">${val}</span>`;
    if (headerText && (headerText.toLowerCase().includes('rate') || headerText.toLowerCase().includes('amount') || headerText.toLowerCase().includes('cost'))) {
        if (typeof val === 'string' && /[\d,]+/.test(val)) return `<span class="cell-currency">${val}</span>`;
    }
    if (headerText && (headerText.toLowerCase().includes('qty') || headerText.toLowerCase().includes('quantity'))) {
        return `<span class="cell-number">${val}</span>`;
    }
    return val;
}

function renderTable(section) {
    let html = '<div class="data-table-wrapper"><table class="data-table">';
    // thead
    html += '<thead><tr>';
    section.headers.forEach((h, i) => {
        html += `<th${i === 0 ? ' class="col-sno"' : ''}>${h}</th>`;
    });
    html += '</tr></thead>';
    // tbody
    html += '<tbody>';
    section.rows.forEach(row => {
        html += '<tr>';
        row.forEach((cell, ci) => {
            if (ci === 0) {
                html += `<td class="sno">${cell}</td>`;
            } else {
                html += `<td>${renderCell(cell, section.headers[ci])}</td>`;
            }
        });
        html += '</tr>';
    });
    html += '</tbody>';
    // tfoot
    if (section.totals) {
        html += '<tfoot><tr>';
        section.totals.forEach((cell, ci) => {
            const cls = isCurrencyCell(cell) ? ' class="cell-currency"' : '';
            html += `<td${cls}>${cell ? `<strong>${cell}</strong>` : ''}</td>`;
        });
        html += '</tr></tfoot>';
    }
    html += '</table></div>';
    return html;
}

function renderSection(section) {
    let html = '<div class="sheet-section">';
    html += `<div class="section-header">
        <div class="section-icon ${section.iconCls}">${section.icon}</div>
        <div>
            <div class="section-title">${section.title}</div>
            <div class="section-subtitle">${section.subtitle || ''}</div>
        </div>
    </div>`;
    html += renderTable(section);
    html += '</div>';
    return html;
}

function renderSummaryTab() {
    const s = DATA.summary;
    let html = '';
    // Cards
    html += '<div class="summary-grid">';
    s.cards.forEach(c => {
        html += `<div class="summary-card ${c.cls}">
            <div class="card-label">${c.label}</div>
            <div class="card-value">${c.value}</div>
            <div class="card-sub">${c.sub}</div>
        </div>`;
    });
    html += '</div>';
    // Overview table
    html += renderSection({
        title: 'Work Component Summary',
        subtitle: 'High-level breakdown of all telecommunication work packages',
        icon: '📊', iconCls: 'blue',
        headers: s.overviewTable.headers,
        rows: s.overviewTable.rows,
        totals: ['', '', '', '', '4,875.00', '']
    });
    return html;
}

function renderGenericTab(dataKey) {
    const tabData = DATA[dataKey];
    if (!tabData || !tabData.sections) return '<p>No data available.</p>';
    return tabData.sections.map(renderSection).join('');
}


// ============================================================
// TAB SWITCHING
// ============================================================
const tabMap = {
    'summary': renderSummaryTab,
    'ofc': () => renderGenericTab('ofc'),
    'network': () => renderGenericTab('network'),
    'pa-display': () => renderGenericTab('paDisplay'),
    'cctv': () => renderGenericTab('cctv'),
    'telephone': () => renderGenericTab('telephone'),
    'wifi': () => renderGenericTab('wifi'),
    'power': () => renderGenericTab('power'),
    'bom': () => renderGenericTab('bom'),
    'timeline': () => renderGenericTab('timeline'),
};

const tabNames = {
    'summary': 'Summary',
    'ofc': 'OFC & Cabling',
    'network': 'Network & IP',
    'pa-display': 'PA & Display',
    'cctv': 'CCTV & Surveillance',
    'telephone': 'Telephone Systems',
    'wifi': 'Wi-Fi & Connectivity',
    'power': 'Power & Earthing',
    'bom': 'Bill of Materials',
    'timeline': 'Timeline & Milestones',
};

let currentTab = 'summary';

function switchTab(tabId) {
    currentTab = tabId;
    // Update tab buttons
    document.querySelectorAll('.tab').forEach(t => {
        t.classList.toggle('active', t.dataset.tab === tabId);
    });
    // Render content
    const container = document.getElementById('sheetContainer');
    const renderFn = tabMap[tabId];
    container.innerHTML = renderFn ? renderFn() : '';
    // Update status bar
    document.getElementById('statusSheetName').textContent = `Sheet: ${tabNames[tabId] || tabId}`;
    // Count rows
    const rows = container.querySelectorAll('.data-table tbody tr');
    document.getElementById('statusRowCount').textContent = `Rows: ${rows.length}`;
}

// ============================================================
// EXPORT CSV
// ============================================================
function exportCurrentTabCSV() {
    const container = document.getElementById('sheetContainer');
    const tables = container.querySelectorAll('.data-table');
    if (tables.length === 0) return;

    let csv = '';
    tables.forEach((table, idx) => {
        if (idx > 0) csv += '\n\n';
        const headers = Array.from(table.querySelectorAll('thead th')).map(th => `"${th.textContent.replace(/"/g, '""')}"`);
        csv += headers.join(',') + '\n';
        table.querySelectorAll('tbody tr').forEach(tr => {
            const cells = Array.from(tr.querySelectorAll('td')).map(td => `"${td.textContent.replace(/"/g, '""').trim()}"`);
            csv += cells.join(',') + '\n';
        });
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Raipur_Telecom_${tabNames[currentTab] || 'Sheet'}.csv`;
    a.click();
    URL.revokeObjectURL(url);
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    // Tab clicks
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });

    // Export button
    document.getElementById('btnExportCSV').addEventListener('click', exportCurrentTabCSV);

    // Print button
    document.getElementById('btnPrint').addEventListener('click', () => window.print());

    // Initial render
    switchTab('summary');
});
