// === Auto-generated prelude (PWA wrapper) ===
// Pull React hooks off the React UMD global.
const {
  useState,
  useEffect,
  useMemo,
  useRef
} = React;

// LucideReact UMD bundle exposes every icon as a named property on the global.
// Bail loudly if it's missing — better a clear error than a silent ReferenceError.
if (typeof LucideReact === 'undefined') {
  throw new Error('AgriPro: lucide-react UMD bundle not loaded before app.js');
}
const {
  Leaf,
  Activity,
  BookOpen,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info,
  ShoppingBag,
  Target,
  Sprout,
  Thermometer,
  Zap,
  Wind,
  Flower2,
  Settings,
  Layers,
  HelpCircle,
  Eye,
  CloudRain,
  SunDim,
  FileText,
  Beaker,
  Sun,
  Sparkles,
  Calculator,
  ClipboardList,
  RotateCcw,
  ArrowRight,
  Scale,
  Atom,
  Droplets,
  ShieldCheck,
  Skull,
  FlaskConical,
  BarChart3
} = LucideReact;
// === End prelude ===

// ==========================================
// 0. ERROR BOUNDARY
// ==========================================

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("AgriPro UI Error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return /*#__PURE__*/React.createElement("div", {
        className: "min-h-screen flex items-center justify-center bg-red-50 p-6"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full border border-red-100"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3 text-red-600 mb-4"
      }, /*#__PURE__*/React.createElement(AlertTriangle, {
        size: 32
      }), /*#__PURE__*/React.createElement("h2", {
        className: "text-xl font-bold"
      }, "Application Error")), /*#__PURE__*/React.createElement("p", {
        className: "text-stone-600 mb-4"
      }, "A critical initialization error occurred. Please reset the application to clear previous version cache."), /*#__PURE__*/React.createElement("div", {
        className: "bg-stone-900 text-red-400 p-4 rounded-lg font-mono text-xs overflow-auto max-h-48 mb-6"
      }, this.state.error?.toString()), /*#__PURE__*/React.createElement("button", {
        onClick: () => {
          localStorage.clear();
          window.location.reload();
        },
        className: "w-full py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg"
      }, "Clear Cache & Reset App")));
    }
    return this.props.children;
  }
}

// ==========================================
// 1. DATA CONSTANTS
// ==========================================

const TRANSLATIONS = {
  en: {
    app_title: "AgriPro Notebook",
    knowledge: "Knowledge",
    advisor: "Advisor",
    mix_rules: "Mixing",
    ph_availability: "pH Availability",
    tap_element: "Tap an element to view deep agronomic insights",
    antagonism: "Antagonism (Soil/Mix)",
    inhibition: "Inhibition/Blockage",
    synergy: "Synergy",
    lbl_soil_conditions: "Soil & Weather Conditions",
    lbl_adjust_soil: "Adjust to see impact on nutrient availability",
    lbl_ph: "Soil pH",
    lbl_texture: "Soil Texture / CEC",
    lbl_om: "Organic Matter (OM)",
    lbl_cation: "Dominant Cation",
    lbl_weather: "Weather / Stress (VPD)",
    lbl_ec: "Soil EC (Salinity)",
    lbl_crop_profile: "Crop Profile",
    lbl_crop_type: "Crop Type",
    lbl_variety: "Variety/Clone",
    lbl_tree_age: "Tree Age (Years)",
    lbl_crop_stage: "Growth Stage",
    lbl_leaf_analysis: "Leaf Analysis / Symptoms",
    lbl_recommendation: "Precision Recipe",
    lbl_rationale: "Agronomic Rationale",
    lbl_rate_timing: "Rate & Timing",
    lbl_compat_warn: "Safety Check",
    lbl_reset: "Reset Inputs",
    lbl_calculate: "Generate Recipe",
    opt_crop_durian: "Durian",
    opt_crop_general: "General / Other Crops",
    opt_var_mk: "Musang King (D197)",
    opt_var_bt: "Black Thorn (D200)",
    opt_var_d24: "D24 (Sultan)",
    opt_var_ioi: "IOI / Hajah Hasmah (D168)",
    opt_var_gp: "Golden Phoenix (D198)",
    opt_var_rp: "Red Prawn (D175)",
    opt_var_tekka: "Tekka (D160)",
    opt_var_mt: "Monthong (D159)",
    opt_var_tk: "Tupai King (D214)",
    opt_var_d101: "D101 (Mas)",
    opt_var_generic: "Generic / Kampung",
    opt_stage_seedling: "Seedling / Transplant",
    opt_stage_veg: "Vegetative (Flushing)",
    opt_stage_pre_flower: "Pre-Flowering & Induction",
    opt_stage_flower_bud: "Bud Emergence (Crab Eyes) ",
    opt_stage_matchstick: "Matchstick Elongation",
    opt_stage_bloom: "Full Bloom (Anthesis)",
    opt_stage_fruit_set: "Early Fruit Set (0–10 DAA)",
    opt_stage_fruit_drop_1: "1st Wave: Embryo Culling (10–25 DAA)",
    opt_stage_ping_pong: "2nd Wave: Flush Competition (35–50 DAA)",
    opt_stage_rapid_expansion: "Rapid Expansion (50–90 DAA)",
    opt_stage_maturation: "Maturation & Natural Split",
    opt_stage_post_harvest: "Post-harvest Recovery",
    opt_sym_none: "Healthy / Balanced",
    opt_sym_yellow_old: "Old Leaves Yellowing (Nitrogen/Magnesium/Potassium deficiency)",
    opt_sym_yellow_new: "New Leaves Yellowing (Iron/Manganese/Sulfur deficiency)",
    opt_sym_burn: "Leaf Tip Burn (Salinity/Potassium deficiency)",
    opt_sym_stunted: "Stunted Roots / Growth",
    opt_sym_fruit_crack: "Fruit Cracking / Deformity",
    opt_sym_wet_core: "Wet Core / Watery Flesh",
    opt_sand: "Sandy (Low Retention)",
    opt_loam: "Loam (Balanced)",
    opt_clay: "Clay (High Retention)",
    opt_low: "Low (<2%)",
    opt_med: "Medium (2-5%)",
    opt_high: "High (>5%)",
    opt_bal: "Balanced",
    opt_hi_ca: "Calcareous (High Ca)",
    opt_hi_mg: "Serpentine (High Mg)",
    opt_hi_k: "High Potassium",
    opt_hi_na: "Saline (High Na)",
    opt_dry: "Hot & Dry (VPD > 1.6 kPa)",
    opt_norm: "Optimal (0.8-1.2 kPa)",
    opt_wet: "Heavy Rain / Overcast (< 0.5 kPa)",
    opt_ec_low: "Low (< 1.0)",
    opt_ec_opt: "Optimal (1.0-2.0)",
    opt_ec_high: "High (> 2.0)",
    lbl_acid: "Acidic",
    lbl_neutral: "Neutral",
    lbl_alkaline: "Alkaline",
    lbl_visual: "Visual Check",
    lbl_h2o2: "H2O2 (Hydrogen Peroxide) Test",
    desc_visual_low: "Light color/white, sandy or compacted, no smell.",
    desc_visual_med: "Standard brown soil.",
    desc_visual_high: "Dark black, crumbly structure, earthy smell.",
    desc_h2o2_low: "No reaction.",
    desc_h2o2_med: "Slight fizzing.",
    desc_h2o2_high: "Violent fizzing/heat.",
    lbl_soil_impact: "Environmental Impact Analysis",
    msg_soil_ok: "Current soil conditions are generally favorable for this nutrient.",
    lbl_high_conc_inhib: "Tank Mix Inhibition / Incompatibility",
    lbl_inhibits: "Inhibits/Blocks",
    lbl_when: "When",
    lbl_none: "None",
    lbl_market_insight: "Commercial Insight",
    lbl_app_strategy: "Application Strategy",
    lbl_def_signal: "Deficiency Signals",
    lbl_common_sources: "Common Sources",
    lbl_metabolism: "Physiological Function",
    lbl_enzymes: "Key Enzymes",
    lbl_optimal_levels: "Diagnostic References",
    lbl_soil_test: "Soil Target",
    lbl_leaf_tissue: "Leaf Tissue Target",
    lbl_ionic_form: "Ionic Form",
    lbl_leach_risk: "Leaching Risk",
    lbl_soil_grip: "Soil Adsorption",
    lbl_compete: "Competition",
    lbl_stage_veg: "Vegetative",
    lbl_stage_fruit: "Fruiting",
    lbl_bio_synergy: "Bio-Stimulant Synergy (Optional)",
    lbl_recipe_center: "RECIPE",
    info_AA_zwitterion_title: "Agronomy Tech: Zwitterion Effect",
    info_AA_zwitterion_desc: "Why are Amino Acids called 'Double-Sided Tape'?\n• Smart Charge: They carry both positive (+) and negative (-) charges. This allows them to grab soil particles (reducing runoff) while wrapping around metal nutrients (natural chelation).\n• pH Chameleon: Unlike salts that precipitate, they adjust their charge based on soil pH, keeping nutrients active for root uptake.",
    lbl_immobile_insight: "Immobile Nutrient Strategy",
    msg_immobile_advice: "Traffic Control: This element does NOT move inside the plant. Old leaves cannot donate it to new shoots.\n\nStrategy:\n1. Direct Hit: Root delivery is often too slow for fast growth. You MUST spray directly on new leaves/fruit.\n2. Hitchhiker: Uptake depends entirely on transpiration (water flow). No water flow = No uptake. Ensure steady irrigation.",
    cat_Macro: "Macronutrient",
    cat_Secondary: "Secondary Nutrient",
    cat_Micro: "Micronutrient",
    cat_Beneficial: "Beneficial Element",
    cat_Biostimulant: "Biostimulant",
    mob_Mobile: "Mobile in Plant",
    mob_Immobile: "Immobile in Plant",
    elem_Nitrogen: "Nitrogen (N)",
    elem_Phosphorus: "Phosphorus (P)",
    elem_Potassium: "Potassium (K)",
    elem_Sulfur: "Sulfur (S)",
    elem_Calcium: "Calcium (Ca)",
    elem_Magnesium: "Magnesium (Mg)",
    elem_Iron: "Iron (Fe)",
    elem_Manganese: "Manganese (Mn)",
    elem_Boron: "Boron (B)",
    elem_Copper: "Copper (Cu)",
    elem_Zinc: "Zinc (Zn)",
    elem_Molybdenum: "Molybdenum (Mo)",
    elem_Silicon: "Silicon (Si)",
    elem_Chlorine: "Chlorine (Cl)",
    elem_Nickel: "Nickel (Ni)",
    elem_Sodium: "Sodium (Na)",
    elem_Cobalt: "Cobalt (Co)",
    elem_AminoAcids: "Amino Acids (AA)",
    elem_Peptides: "Peptides (Pep)",
    rec_Humic: "Humic Acid",
    src_urea: "Urea (46%)",
    src_amsul: "Ammonium Sulfate (21%)",
    src_calnit: "Calcium Nitrate",
    src_kno3: "Potassium Nitrate",
    src_dap: "DAP (18-46-0)",
    src_map: "MAP (11-52-0)",
    src_rock_phos: "Rock Phosphate (ERP)",
    src_polyphos: "Polyphosphate",
    src_mop: "Muriate of Potash (MOP/KCl)",
    src_sop: "Sulfate of Potash (SOP)",
    src_kmg_sulf: "Sul-Po-Mag",
    src_dolomite: "Dolomite (GML)",
    src_gypsum: "Gypsum (CaSO4)",
    src_lime: "Lime (CaCO3)",
    src_kieserite: "Kieserite (MgSO4)",
    src_mg_oxide: "Magnesium Oxide",
    src_mg_nitrate: "Magnesium Nitrate",
    src_elem_sulfur: "Elemental Sulfur",
    src_fe_sulf: "Ferrous Sulfate",
    src_fe_edta: "Fe-EDTA",
    src_fe_eddha: "Fe-EDDHA (Red Iron)",
    src_fe_amsul: "Ferrous Ammonium Sulfate",
    src_zn_sulf: "Zinc Sulfate",
    src_zn_edta: "Zn-EDTA",
    src_zn_oxide: "Zinc Oxide",
    src_mn_sulf: "Manganese Sulfate",
    src_mn_edta: "Mn-EDTA",
    src_mn_oxide: "Manganese Oxide",
    src_cu_sulf: "Copper Sulfate",
    src_cu_hydrox: "Copper Hydroxide",
    src_cu_edta: "Cu-EDTA",
    src_borax: "Borax",
    src_boric: "Boric Acid",
    src_solubor: "Solubor",
    src_ca_borate: "Calcium Borate",
    src_na_moly: "Sodium Molybdate",
    src_amm_moly: "Ammonium Molybdate",
    src_k_silicate: "Potassium Silicate",
    src_ca_silicate: "Calcium Silicate",
    src_rice_ash: "Rice Husk Ash",
    src_ca_chlor: "Calcium Chloride",
    src_amm_chlor: "Ammonium Chloride",
    src_ni_sulf: "Nickel Sulfate",
    src_ni_nitr: "Nickel Nitrate",
    src_sea_salt: "Sea Salt",
    src_na_nitr: "Sodium Nitrate",
    src_co_sulf: "Cobalt Sulfate",
    src_co_carb: "Cobalt Carbonate",
    src_plant_aa: "Plant Amino (Soy/Corn)",
    src_animal_aa: "Animal Amino",
    src_fish_aa: "Fish Amino (FAA)",
    src_fish_pep: "Fish Peptides",
    src_soy_pep: "Soy Peptides",
    val_ratio_7_1: "Ratio > 7:1",
    val_high_ph_ca_b: "pH > 7.0 (Insoluble Salts)",
    val_ratio_1_5: "Ratio < 1.5",
    val_ratio_2_5: "Ratio > 2.5",
    val_tank_mix: "Incompatible Mix",
    mix_calnit: "Calc. Nitrate",
    mix_phos: "Phosphates",
    mix_sulf: "Sulfates",
    mix_mag: "Magnesium",
    mix_iron: "Iron",
    mix_urea: "Urea",
    mix_amm_nit: "Ammonium Nit.",
    mix_ca_mg: "Ca + Mg",
    mix_boron: "Boron",
    mix_zinc: "Zinc Fert",
    mix_ammonium: "Ammonium N",
    mix_humic: "Humic Acid",
    mix_amino: "Amino Acids",
    mix_pep: "Peptides",
    mix_copper: "Copper Fungicide",
    mix_silicate: "Silicates",
    mix_acids: "Acids",
    mix_seaweed: "Seaweed (Alkaline)",
    mix_pesticides: "Sensitive Pesticides",
    mix_reason_ppt_white: "Precipitate (White Solid). ",
    mix_reason_ppt_gyp: "Precipitate (Gypsum). ",
    mix_reason_ppt_high: "Precipitates at high conc/pH. ",
    mix_reason_lockup: "Lockout (unless chelated). ",
    mix_reason_wet: "Mix becomes wet/paste. ",
    mix_reason_ratio_complex: "Physical: Concentrates gel instantly. Chemical: Keep Ca:Mg 3:1 to 5:1. ⚠️ Warning: Boron must be < 0.2% (Ca:B ≈ 100:1). Excess burns leaves.",
    mix_reason_humate_sludge: "Reaction: Forms insoluble Calcium Humate sludge, clogging nozzles. Use Fulvic Acid instead.",
    mix_reason_copper_burn: "Phytotoxicity: Aminos carry Copper into tissue too fast, causing severe burn.",
    mix_reason_pep_copper: "Phytotoxicity: Peptides increase cell permeability, leading to Copper toxicity burn.",
    mix_reason_silica_gel: "Disaster: Silicates polymerize into glass/gel upon contact with acid. Ruins equipment.",
    mix_reason_silica_ca: "Precipitation: Forms insoluble Calcium Silicate.",
    mix_reason_ph_hydrolysis: "pH Conflict: Alkaline seaweed (pH >9) causes pesticide hydrolysis (breakdown). Add buffer.",
    mix_reason_zn_phos: "Precipitation: Zinc + Phosphate = Zinc Phosphate (insoluble stone). Causes lockup.",
    mix_reason_cu_acid: "Burn Risk: Acidic environment releases too much Copper ion instantly.",
    mix_reason_nh4_alkali: "Volatilization: Ammonium turns to Ammonia gas in alkaline conditions (Seaweed/Lime).",
    status_incompatible: "Incompatible",
    status_caution: "Caution",
    mix_protocol_title: "Tank Mixing Protocol",
    mix_protocol_gold: "Gold Rule (WALES): No Direct Mixing",
    mix_protocol_gold_desc: "Directly mixing two concentrates (e.g., Calcium + Boron) causes chemical 'shock'. Due to lack of water, ions supersaturate instantly, turning liquid into thick gel or paste ('Pudding Effect'), blocking nozzles permanently.",
    mix_protocol_step1: "1. Water First (70%)",
    mix_protocol_step2: "2. Pre-dilute",
    mix_protocol_step3: "3. Add sequentially",
    mix_protocol_step1_desc: "Water is the best buffer.",
    mix_protocol_step2_desc: "Dissolve each fertilizer in a separate bucket first.",
    mix_protocol_step3_desc: "Add Slurry A -> Agitate -> Add Slurry B.",
    adj_title: "Adjuvant Strategy",
    adj_subtitle: "Choosing the right 'Courier'",
    adj_nis_title: "Non-Ionic Surfactant (NIS)",
    adj_nis_desc: "The Safe All-Rounder. Lowers surface tension to wet leaves but mostly stays on surface. Best for general nutrition, low burn risk.",
    adj_si_title: "Organosilicone (Super Spreader)",
    adj_si_desc: "Penetration Expert. Extremely low surface tension (20 dynes/cm). Liquid enters stomata directly. Great for systemic uptake but risky in heat.",
    adj_orange_title: "Orange Oil / D-Limonene",
    adj_orange_desc: "Organic Multitasker. Dissolves waxy cuticle to act as a penetrant. Bonus: Physically kills soft-bodied pests (mites/thrips) by dehydration.",
    adj_orange_warn: "Warning: 'Hot' Oil. Strips wax -> Sun sensitivity. Rules: 1. Do not use if >30°C. 2. Do not mix with other penetrants.",
    adj_bee_title: "Pollinator Safety",
    adj_bee_desc: "Contact Toxicity: D-Limonene is toxic to bees on contact (dissolves exoskeleton). Strong scent interferes with foraging.\n\nCompliance:\n• Do NOT spray during flowering.\n• Only spray in late evening when bees are hive-bound.",
    adj_rule_burn: "Burn Risk: Organosilicone enters too fast. Never mix with Copper or Sulfur above 30°C.",
    adj_rule_runoff: "Runoff Risk: Super spreading causes liquid to coalesce and run off. Reduce water volume.",
    adj_rule_hydrolysis: "pH Sensitive: Degrades rapidly if pH <4 or >9. Use immediately.",
    adj_diy_title: "DIY Dish Soap?",
    adj_diy_desc: "<b>NO:</b> Household detergents are usually <b>Anionic</b> and contain sodium. They strip the leaf cuticle aggressively, leading to sunscald and pathogen entry. Use agricultural adjuvants.",
    chel_title: "Chelation & Stability",
    chel_subtitle: "Unlock nutrients, prevent lockup",
    chel_edta: "EDTA (Standard)",
    chel_edta_desc: "Economy standard. Good for foliar. Warning: Unstable at pH > 6.5. Releases nutrients (especially Fe) in alkaline soil, leading to precipitation.",
    chel_eddha: "EDDHA (Red Iron)",
    chel_eddha_desc: "The Heavyweight. Extremely stable pH 3.0-10.0. The ONLY choice for soil application of Iron in alkaline soils. Expensive but works.",
    chel_deta: "DETA",
    chel_deta_desc: "Expert Grade. Used for Cu and Zn. Stronger grip than EDTA, but still fails in high alkalinity. ⚠️ Truth: Cannot chelate Boron.",
    chel_dtpa: "DTPA (Yellow Iron)",
    chel_dtpa_desc: "Hydroponic Standard. Stable up to pH 7.5. Fills the gap between EDTA (weak) and EDDHA (pricey).",
    chel_amino: "Amino Acid (Organic)",
    chel_amino_desc: "Ferrari Speed. Penetrates leaf cuticle fastest. As 'pre-digested' protein, plants spend zero energy absorbing it. Best for stress recovery.",
    chel_fulvic: "Fulvic Acid (Carrier)",
    chel_fulvic_desc: "The Gold Porter. Small organic acid molecule. Carries Ca/Mg/Trace elements through cell walls. Dissolves at all pH levels.",
    chel_ligno: "Lignosulfonate",
    chel_ligno_desc: "Economy Organic. Paper byproduct. Weak complexing (not true chelate), but excellent natural sticker/spreader properties. Foliar only.",
    chel_polyol: "Polyol (Sugar Alcohol)",
    chel_polyol_desc: "Boron's Taxi. Mannitol/Sorbitol complex. The ONLY technology that makes Boron mobile in the phloem (transport from leaf to fruit).",
    chel_citric: "Citric Acid",
    chel_citric_desc: "Adjuster. Weak chelation, but excellent for temporarily lowering tank pH to keep mixes stable.",
    chel_wood_vinegar: "Wood Vinegar",
    chel_wood_vinegar_desc: "Synergist. Weak chelation via acetic acid. Lowers pH, repels pests, and improves leaf penetration.",
    chel_lbl_synthetic: "Synthetic Chelates",
    chel_lbl_organic: "Organic Carriers",
    chel_badge_ph_low: "pH < 6.5",
    chel_badge_ph_wide: "pH 3-10",
    chel_badge_ph_med: "pH < 7.5",
    chel_badge_fast: "Fast Entry",
    chel_badge_univ: "Universal",
    unit_title: "Understanding Units",
    unit_desc: "Why use Ratio vs Percent vs ppm",
    unit_col_unit: "Unit",
    unit_col_target: "Targets",
    unit_col_reason: "Logic",
    unit_ratio_targets: "Fe, Mn, Ca, Mg",
    unit_ratio_reason: "Balance dictates uptake (Competition). Relative ratio is more critical than absolute amount.",
    unit_percent_targets: "N, K, Mg (Macros)",
    unit_percent_reason: "High quantity (1-5% of tissue). Toxicity/Inhibition is measured in percent.",
    unit_ppm_targets: "Zn, Cu, B, Mo (Micros)",
    unit_ppm_reason: "Trace amounts. A tiny absolute increase (mg/kg) can cause toxicity.",
    unit_row_ratio: "Ratio",
    unit_row_percent: "Percent",
    unit_row_ppm: "ppm",
    // FULLY EXPANDED COMMERCIAL FORMS & INSIGHTS
    info_N_func: "The Master Builder of Plant Life. Nitrogen is the fundamental building block of amino acids, proteins, and the chlorophyll molecule (the engine of photosynthesis). It directly controls DNA/RNA synthesis, drives cellular division, and regulates Leaf Area Index (LAI). Without sufficient N, the plant cannot construct the enzymatic machinery needed for any other metabolic processes. It is the primary driver of vegetative biomass accumulation.",
    info_N_comm: "Market Forms:\n• Urea (46% N): Cheapest, highest concentration. Amide-N must convert to Ammonium, then Nitrate via soil urease and nitrification bacteria. High volatilization loss (as ammonia gas) if left on the surface without moisture. Temporarily raises pH, then strongly acidifies.\n• Calcium Nitrate (15.5% N, 19% Ca): The Premium Choice. 100% Nitrate-N. Fast-acting, non-acidifying, and directly absorbed by roots without energy penalty. Synergistically pulls Calcium into the plant. Ideal for fruit expansion and rescue.\n• Ammonium Sulfate (21% N, 24% S): Contains Ammonium-N. Highly acidifying. Excellent for high-pH soils or providing a slow, steady green-up. ⚠️ Warning: Excess Ammonium strongly inhibits Calcium, Potassium, and Magnesium root uptake.\n• Potassium Nitrate (13% N, 46% K2O): Fast rescue. The Nitrate-N acts as a carrier, synergistically pulling Potassium into the plant. Unbeatable for late-stage fruit sizing and sweetening.\n• Ammonium Nitrate (34% N): Balanced half-ammonium, half-nitrate. Good instant and sustained feed, but highly regulated/restricted in many regions.",
    info_N_app: "Strategy: 'Pulse Feeding' & Stage Management. Apply N heavily during the vegetative flush. Once flowering initiates, immediately restrict N to prevent 'vegetative bypass' (where the plant drops flowers/fruit to grow new leaves). \n\nPulse feed: Apply main N-fertilizer, then wait 3-4 days before applying Calcium or Micros to avoid root congestion. In fruiting, switch from Amide/Ammonium sources to Nitrate sources to prevent blocking Potassium and Calcium.",
    info_N_def: "Mobile Element Alert: Old leaves turn pale green to solid yellow evenly across the entire leaf (including veins). The plant sacrifices older leaves to mobilize N to new growth. Severe cases show stunted, spindly growth, early leaf drop, and a thin, sparse canopy.",
    info_N_bio: "Organic Synergy:\n1. Fish Amino Acids provide pre-built peptide blocks; plants absorb these directly, saving the immense ATP energy normally required to convert nitrate into protein.\n2. Humic & Fulvic Acids act as a sponge (high CEC), holding onto mobile Nitrate/Ammonium ions in the root zone and dramatically reducing leaching losses during heavy rain.",
    info_N_antag: "1. The Cation War (Ammonium vs K/Ca/Mg): Ammonium (NH4+) is a highly reactive positive ion that aggressively outcompetes Potassium (K+), Calcium (Ca++), and Magnesium (Mg++) for root entry.\nSolution: Use Nitrate (NO3-) during fruit filling to avoid blocking K.\n\n2. The Dilution Trap (N vs P/Micros): Excess N forces a rapid explosion of vegetative foliage. The root system cannot mine Phosphorus or slow-moving Trace Elements fast enough to keep up, causing severe 'dilution' deficiencies in the new leaves.",
    info_N_syn: "1. Chlorophyll Engine (Mg): N builds the porphyrin ring structure, while Magnesium (Mg) sits dead center. Neither works without the other.\n2. Protein Factory (S): N borrows N to make the chain, but Sulfur (S) creates the 'disulfide bridges' that fold the protein into its functional 3D shape.\n3. Nitrate Carrier (K, Ca): Potassium and Calcium act as physiological escorts, helping carry Nitrate-N up the xylem.",
    info_N_inhib: "1. Copper (Cu) Lockout: High Nitrogen applications bind with Copper in the soil and tissue, preventing lignin formation (causing weak, soft branches).\n2. Boron (B) Inhibition: High N blocks Boron uptake, leading to fruit cracking and flower abortion.\n3. pH Crash (Mo): Heavy use of Ammonium/Urea lowers soil pH, making Molybdenum chemically unavailable for Nitrogen reduction.",
    info_P_func: "The Energy Currency & Reproductive Master Switch. Phosphorus is the backbone of ATP (cellular energy), DNA, and cell membranes. While it drives root elongation in young plants, its most critical role in mature trees is signaling the switch from vegetative growth (flushing) to generative reproduction (flowering). A massive spike in P tells the plant to channel its accumulated energy into producing floral buds instead of new leaves.",
    info_P_comm: "Market Forms:\n• MKP (Mono-Potassium Phosphate, 0-52-34): The undisputed king of flower induction. Why do farmers heavily apply this pre-flowering? 1) Zero Nitrogen ensures the tree stops flushing new leaves. 2) Massive P (52%) supplies the immense ATP energy required to push out floral buds. 3) High K (34%) matures branches, accumulates starch, and creates a slight osmotic stress that tricks the tree into survival/reproductive mode.\n• MAP (11-52-0): Contains N. Good for early root development but avoid during strict flower induction if N needs to be zero. Creates an acidic micro-zone (pH ~4.0).\n• DAP (18-46-0): Creates an alkaline micro-zone (pH ~8.0). High N and P, used strictly in early vegetative stages.\n• Polyphosphates: Liquid form that resists soil lock-up much better than granular orthophosphates.",
    info_P_app: "Pre-Flowering Strategy (The C:N Shift): To force flowers, the tree needs high Carbohydrates (C) and low Nitrogen (N). 4-6 weeks before expected blooming, halt all soil N. Apply foliar MKP (0-52-34) every 7-10 days to harden branches and force bud break.\n\n⚠️ The P-Zn Protocol (Order of Operations): If the tree lacks Zinc, do NOT apply heavy P until Zinc is corrected. \nStep 1: Apply foliar Zn-EDTA or Zn-Amino to bypass the soil entirely.\nStep 2: Wait 5-7 days for the plant to absorb and translocate the Zinc to build growth enzymes.\nStep 3: Now it is safe to apply heavy Phosphorus to the soil or via fertigation. Never tank-mix P and Zn.",
    info_P_def: "Old leaves turn dark green, purple, or bronze. Shallow roots, delayed flowering.",
    info_P_bio: "Humic Synergy: Humic acid coats P, preventing lockup by Iron/Calcium. Extends availability window.",
    info_P_antag: "1. One-Way Valve (P vs N): High P does not stop N, but High N dilutes P.\n\n2. The 3-Level P-Zn Lockout: High P aggressively crashes Zinc on three fronts:\n• Chemical: They bind in soil forming insoluble Zinc Phosphate stones.\n• Biological: Massive P tells the tree to suppress mycorrhizal fungi (which are needed to hunt for Zn).\n• Physiological: High internal P traps Zn in the roots, preventing it from traveling up the xylem to new leaves.",
    info_P_syn: "1. Energy Carrier (Mg): Mg transports ATP. No Mg = No energy transfer.\n2. Root Hunter (N): N drives root length to find immobile P.",
    info_P_inhib: "1. Phosphate Lockup (Zn/Fe/Cu): Excess P creates zinc phosphate stones. #1 cause of Zinc deficiency.\n2. Root Block: Physical blockage of Copper sites.",
    info_K_func: "The Quality Commander & Osmotic Regulator. Potassium activates over 60 critical enzymes. It acts as the plant's hydraulic pump, regulating stomatal opening/closing (drought resistance) and maintaining cell turgor. Crucially, K is the transport vehicle that pumps photosynthates (sugars) from the leaves directly into the expanding fruit, dictating final size, weight, Brix (sweetness), and shelf-life.",
    info_K_comm: "Market Forms:\n• MOP (Potassium Chloride / 0-0-60): The cheapest and most common. Warning: High chloride index. Toxic to sensitive crops (Durian, Avocado, Citrus) leading to leaf edge burn and ruined soil structure. Strictly avoid during fruiting.\n• SOP (Potassium Sulfate / 0-0-50): The Premium Quality Standard. Very low salt index. Delivers K plus Sulfur (18%), which is essential for flavor, aroma, and essential oils. The 'Black Gold' secret for Durian bitterness.\n• Potassium Nitrate (KNO3 / 13-0-46): The Fastest Transporter. The Nitrate acts as a molecular escort, instantly pulling K into the plant. Unmatched for rapid fruit sizing and rescuing severe deficiencies.\n• Potassium Silicate: A highly alkaline liquid foliar. Delivers K while physically hardening cell walls (phytoliths) against pest/fungal attacks.",
    info_K_app: "Application Strategy: K requirements skyrocket during the 'Fruit Sizing' phase. The tree will aggressively strip K from older leaves to feed the fruit if soil K is low. \n\nProtocol: Switch to heavy K feeding (N:K ratio of 1:3 or 1:4) immediately after fruit set. For premium crops, apply foliar SOP or KNO3 3-4 weeks before harvest to push final sugar accumulation and complex flavor profiles.",
    info_K_def: "Mobile Element Alert: Classic 'Marginal Scorch'. Older leaves turn yellow and then physically burn (brown/crispy) along the outer edges. Fruit will be undersized, lack sweetness, ripen unevenly, and have a poor, watery texture.",
    info_K_bio: "Seaweed Synergy: Cold-pressed Seaweed (Kelp) is naturally rich in Potassium and bio-active cytokinins. Mixing Seaweed with K during drought or heat waves signals the plant to keep stomata functioning, preventing yield collapse.",
    info_K_antag: "1. The Cation Bully (K vs Mg/Ca): Potassium is a small, highly mobile, and aggressive positive ion. Plants naturally 'Luxury Consume' K. If applied too heavily, it physically outruns heavy Ca++ and Mg++ at the root surface, inducing severe Magnesium (yellowing) and Calcium (fruit cracking/wet core) lockouts.\n2. The Ammonium Block: High levels of Ammonium (NH4+) in the soil will aggressively compete with and block Potassium uptake.",
    info_K_syn: "1. Sugar Escort (Boron): K provides the pressure to move sap, but Boron acts as the 'gatekeeper' allowing sugars to cross cell membranes into the fruit. They must work together.\n2. Transport Aide (Iron & Manganese): K regulates the flow of water that carries slow-moving Iron and Manganese up the canopy.",
    info_K_inhib: "1. Cation Displacement (Mg/Ca): Displaces Mg and Ca at root exchange sites.\n2. Boron Dilution: Extremely fast cell expansion driven by high K can outpace the plant's ability to supply Boron, causing hollow heart or cracking.",
    info_Ca_func: "The Structural Cement & Anti-Cracking Agent. Calcium forms 'Calcium Pectate' in the middle lamella—literally the glue that binds plant cells together. As fruits expand rapidly (driven by water and Potassium), the cell walls must stretch. If Calcium is deficient, the cellular 'glue' fails, and the fruit skin physically tears apart, resulting in severe Fruit Cracking. It also fortifies cell walls against fungal invasion and acts as a 'Second Messenger', alerting the plant to heat and drought stress.",
    info_Ca_comm: "Market Forms:\n• Sugar Alcohol Calcium (Polyol): The ultimate choice for preventing cracking. Calcium is naturally immobile, but Polyol complexing tricks the plant into moving Ca through the phloem directly into the fruit.\n• Ca-B-Mg Liquid Combos: The industry standard reproductive foliar. Boron is mandatory to make Calcium work (cross-linking the cell walls), while Magnesium prevents the high Ca from causing a localized Mg lockout in the expanding fruit.\n• Calcium Nitrate: Highly soluble fertigation standard. Provides fast Nitrate-N and Ca to roots.\n• Amino-Ca: Gentle foliar option with fast penetration, reducing plant energy expenditure.\n• Dolomite / Ag Lime (The 'Double Duty' Rock): Highly insoluble crushed rock. Serves two massive foundational purposes: 1) pH Correction (neutralizing acid from fertilizers like Urea/Ammonium) and 2) Base Saturation (slow-drip Ca & Mg). ⚠️ Warning: NEVER use Dolomite for immediate fruit nutrition to stop cracking or blossom end rot.",
    info_Ca_app: "Cracking Prevention Protocol: Calcium ONLY moves upward with water (transpiration). Fruits barely transpire, so root-absorbed Calcium mostly bypasses them. You MUST apply mobile foliar Calcium (e.g., Sugar Alcohol Ca) directly onto fruit every 10-14 days during expansion.\n\nDolomite Timing Protocol: Because it is a slow-release rock, timing is critical:\n1. Post-Harvest/Recovery: Apply immediately after harvest to reset exhausted, acidic soil and rebuild Ca/Mg banks.\n2. 2-3 Months Before Flowering: Apply well before blooming so the soil pH is perfectly optimized to absorb expensive P and K fertilizers during the fruiting stage.",
    info_Ca_def: "Severe Fruit Cracking (skin splitting during expansion). 'Wet Core' in durian (watery, mushy flesh). Blossom end rot. Because Ca cannot move from old leaves, new leaves emerge hooked, distorted, or severely curled. Root tips turn brown, blunt, and die.",
    info_Ca_bio: "Carrier Synergy: Fulvic Acid and specialized Peptides bind with Calcium ions, neutralizing their strong positive charge. This allows the heavy Ca molecules to easily slip through the waxy leaf cuticle and into the plant tissue without getting stuck on the leaf surface.",
    info_Ca_syn: "1. The Bricks & Mortar (B): This is a mandatory synergy. Calcium builds the cell wall 'bricks', but Boron is the 'mortar'. If you apply Calcium without Boron, the plant cannot incorporate the Ca into the cell wall, making the spray completely useless. This is why nearly all commercial foliars are Ca+B.\n2. The Expansion Trio (B + Mg): During rapid fruit expansion, Ca+B build the physical cell structure, while Magnesium (Mg) provides the ATP energy to pump sugars into those new cells.\n3. Armor (Si): Silicon reinforces Ca walls on the outer cuticle.",
    info_Ca_antag: "1. Cation Crowd (K/Mg): High Ca (Lime) fills exchange sites, blocking K and Mg.\n2. pH Lock: High Ca raises pH, precipitating trace elements.",
    info_Ca_inhib: "1. pH Block (Fe/Mn/Zn/B): High pH > 7.0 locks out micros.",
    info_Mg_func: "The Chlorophyll Core & Texture Master. Magnesium is the central atom of the chlorophyll molecule—without it, photosynthesis physically stops. Beyond greening, Mg is the master pump that loads sucrose into the phloem to be transported to the fruit. In premium durian cultivation, Mg is the absolute key to developing the signature sticky, rich, and creamy custard-like texture of the flesh.",
    info_Mg_comm: "Market Forms:\n• Kieserite / Magnesium Sulfate (Epsom): Highly soluble, fast-acting. Perfect for foliar sprays to bypass root lockup, and provides essential Sulfur for complex flavor/aroma development.\n• Magnesium Nitrate: Premium fertigation choice. The nitrate acts as a carrier, synergistically pulling Mg into the plant. Excellent for rapid vegetative flushing.\n• Dolomite: Slow-release base saturation. Neutralizes soil acid but provides zero immediate nutrition for developing fruit.\n• Magnesium Oxide (MgO): Mostly insoluble. Used purely as a slow-release soil amendment.",
    info_Mg_app: "Application Strategy (The 'Hidden Hunger' Bypass): During fruit sizing, farmers apply massive amounts of Potassium (K) to swell the fruit. Because K is an aggressive 'bully' ion, it completely locks out Mg at the roots. Even if your soil test shows high Mg, the tree is starving.\n\nPremium Durian Protocol: To maintain the highly desired 'Green Husk' at harvest (preventing premature yellowing) and ensure creamy flesh, you MUST bypass the roots. Apply foliar Magnesium Sulfate every 10-14 days during the final fruit expansion phase. Target a soil K:Mg ratio of roughly 2:1 to 3:1.",
    info_Mg_def: "Mobile Element Alert: Classic 'Interveinal Chlorosis'. Older leaves turn intensely yellow between the veins, leaving a distinct 'green arrowhead' or triangle at the base of the leaf. In premium fruits like Durian, Mg deficiency leads to pale/yellowish husks before full maturity, and flesh that is watery, bland, and lacking the premium sticky texture.",
    info_Mg_syn: "1. Phosphorus Pump (P): Mg carries P/ATP.\n2. Green Factory (N): Synergy for chlorophyll.",
    info_Mg_antag: "1. K/Mg Feud: K inhibits Mg strongly.\n2. Ca Inhibition: High Ca tightens soil, restricting Mg.",
    info_Mg_inhib: "1. Cation Comp (Ca/K): High Mg inhibits Ca and K uptake.",
    info_S_func: "The Flavor & Aroma Architect. Sulfur is a core component of the amino acids Cysteine and Methionine, which are the building blocks of volatile organic compounds (VOCs). In premium durian, these sulfur-based compounds dictate the intense pungency, complex aroma, and signature 'gas-like' alcoholic notes of varieties like Musang King and Black Thorn. It also forms disulfide bridges that give plant proteins their structural integrity.",
    info_S_comm: "Market Forms:\n• SOP (Potassium Sulfate / 0-0-50 + 18% S): The holy grail for premium fruit. Delivers both K for fruit sizing and S for flavor, without any Nitrogen to ruin the flesh texture.\n• Kieserite / Epsom Salt (Magnesium Sulfate): Highly soluble, delivers Mg for creamy texture and S for bitterness simultaneously.\n• Elemental Sulfur (90% S): Highly insoluble. Requires soil bacteria (Thiobacillus) to slowly convert it to sulfate over months. Strongly acidifies soil.\n• Ammonium Sulfate (21% N, 24% S): Excellent for early vegetative green-up but must be avoided during the final fruit ripening stage.\n• Gypsum (CaSO4): A fantastic soil conditioner that provides sulfate-S and Calcium without altering soil pH.",
    info_S_app: "The Ultimate Premium Durian Protocol (The K-Mg-S Triad):\nTo achieve the highly coveted 'Black Gold' profile (intensely bitter, sticky, creamy flesh with pungent aroma), farmers must master the K:Mg:S combination during the final 30 days of fruit development.\n\n• The Ratio: Target a K : Mg : S ratio of roughly 4 : 1 : 2 in late-stage applications.\n• The Mechanics: Potassium (K) drives sugar and fruit size. Magnesium (Mg) builds the thick, creamy, custard texture. Sulfur (S) ferments those sugars into the volatile sulfur compounds that cause the sought-after 'bitterness' and aroma.\n• Strategy: 30 days before fruit drop, halt all Nitrogen. Switch exclusively to SOP (Sulfate of Potash) and foliar Magnesium Sulfate.",
    info_S_def: "Immobile Element Alert: Unlike Nitrogen, Sulfur does not move easily from old to new leaves. Deficiency shows as pale green/yellowing on the NEWEST leaves first. In fruit, low sulfur results in bland, sweet-only flesh completely lacking the premium complex aroma and signature bitterness.",
    info_S_bio: "Amino Acid Synergy: Applying Sulfur alongside Methionine-rich Amino Acids acts as a massive amplifier for ethylene production, naturally accelerating uniform ripening and intensifying the final flavor profile.",
    info_S_syn: "1. The Nitrogen Twin: S is required to metabolize N into protein. Without S, Nitrogen accumulates as toxic nitrates in the leaf, attracting pests.\n2. The Flavor Triad (K + Mg + S): Synergizes to convert simple carbohydrates into complex essential oils and volatile flavors.",
    info_S_antag: "1. Molybdate Clash: High concentrations of Sulfate (SO4²⁻) strongly compete with Molybdate (MoO4²⁻) for root uptake.\n2. Nitrate Competition: High Sulfates can temporarily suppress Nitrate uptake.",
    info_S_inhib: "1. Molybdenum Lockout: Directly inhibits Mo uptake at the root membrane.\n2. Acidification Trap: Heavy use of Elemental Sulfur or Ammonium Sulfate will crash soil pH, locking out macronutrients.",
    info_Si_func: "The Ultimate Stress Armor. Though historically 'forgotten' because it's not strictly essential for basic life, Silicon is critical for field survival. Roots absorb it and transport it to the leaves, where it polymerizes into solid 'Phytoliths' (microscopic glass/opal structures) just beneath the cuticle. This double-layer armor physically blocks fungal hyphae from penetrating and breaks the mandibles of piercing-sucking insects (mites, thrips, aphids). It also forces leaves to stand perfectly erect (maximizing light capture) and tightly regulates stomata to prevent water loss during extreme heat.",
    info_Si_comm: "Market Forms:\n• Orthosilicic / Monosilicic Acid (H4SiO4): The Premium Standard. This is the ONLY form plants can directly absorb. Highly stabilized, fast-acting via foliar, and doesn't drastically spike tank pH.\n• Potassium Silicate (K2SiO3): The traditional workhorse. Highly alkaline (pH 10-11). Great for adding K and Si, but notorious for tank-mix disasters (turns into a solid glass-like gel when mixed with acids or calcium).\n• Calcium Silicate (Slag/Wollastonite): Slow-release granular soil amendment. Excellent for neutralizing highly acidic soils and locking up toxic Aluminum.\n• Rice Husk Ash / Bamboo Biochar: Cheap, organic sources of amorphous silica. Needs microbial action to become plant-available.",
    info_Si_app: "Application Strategy (The Tank-Mix Nightmare): Silicon is chemically aggressive. \n\nGolden Rule for K-Silicate: NEVER mix Potassium Silicate with Calcium, Magnesium, or acidic fertilizers/pesticides without extreme dilution, or your tank will instantly turn to jelly, ruining spray nozzles permanently. \nProtocol: Always add Silicate LAST to a highly diluted tank, or better yet, spray it completely alone. Apply heavily leading into the dry/hot season, or right before expected spikes in pest/fungal pressure.",
    info_Si_def: "Hidden Vulnerability: Plants won't die without it, but they become 'soft targets'. Symptoms include weak, floppy stems (lodging), drooping leaves that struggle to capture sunlight, and a sudden, severe susceptibility to powdery mildew, blight, and mite infestations. Plants will wilt much faster during midday heat.",
    info_Si_bio: "Biostimulant Synergy: Combining stabilized Orthosilicic Acid with Kelp (Seaweed) extracts creates the ultimate 'Drought & Heat Shield', keeping stomata active and preventing sunburn.",
    info_Si_syn: "1. The Double Wall (Ca): Silicon and Calcium work together. Ca is the cement between cells, while Si is the glass armor on the outside.\n2. Light Interception (N): Si keeps Nitrogen-heavy, large leaves rigidly upright, preventing self-shading and maximizing photosynthesis.",
    info_Si_antag: "1. Phosphorus Clash: In the soil, silicate anions and phosphate anions compete for the same binding sites. High Si application can actually free up locked soil P, but extreme Si might compete for P uptake.",
    info_Si_inhib: "1. The Jelly Effect (Tank Mix): Liquid silicates have a massive inhibition/incompatibility with acidic concentrates and metal cations (Ca, Mg, Fe), instantly forming insoluble gel precipitates.",
    info_Fe_func: "The Chlorophyll Architect & Respiration Catalyst. While Magnesium is the center of the chlorophyll molecule, Iron is the mandatory tool required to build it. Without Iron, the plant cannot synthesize chlorophyll, leading to complete energy failure. It is the core driver of the Electron Transport Chain (cellular respiration) and is absolutely essential for nitrogen assimilation (converting toxic nitrates into usable amino acids).",
    info_Fe_comm: "Market Forms:\n• Fe-EDDHA (Red Iron): The heavy-duty soil savior. Extremely stable up to pH 10.0. The ONLY effective choice for soil application in high-pH or calcareous (limestone) soils. Expensive but guarantees uptake.\n• Fe-DTPA (Yellow Iron): Stable up to pH 7.5. The global standard for hydroponics and neutral soils.\n• Fe-EDTA: Unstable above pH 6.5. If used in alkaline soil, it instantly drops the Iron and binds to Calcium instead. Best restricted to foliar sprays.\n• Ferrous Sulfate: Cheap, but chemically naked. Locks up instantly in most soils. Carries a high burn risk if used foliar without organic buffers.",
    info_Fe_app: "Application Strategy (The pH & UV Trap): Iron is the most notoriously difficult micronutrient to manage because it locks up instantly in alkaline soils (pH > 7.0) and high-phosphorus environments. \n\nProtocol: If soil pH is high, bypass roots entirely with foliar sprays (Fe-EDTA or Amino-Fe). ⚠️ UV Warning: Synthetic Iron chelates suffer from photodegradation (UV light breaks the chelate bond). ALWAYS apply Iron foliar sprays in the late evening or very early morning.",
    info_Fe_def: "Immobile Element Alert: Severe 'Interveinal Chlorosis' on the NEWEST leaves. The tissue turns pale yellow or completely white ('bleached'), but the veins remain a sharp, contrasting dark green. This happens because Iron cannot be scavenged from old leaves.",
    info_Fe_bio: "Carrier Synergy: Fulvic Acids and Amino Acids act as natural chelators. Mixing Ferrous Sulfate with Amino Acids protects the Iron from locking up, prevents leaf burn, and facilitates rapid entry through the leaf stomata.",
    info_Fe_syn: "1. The Transport Escort (K): Potassium regulates the water flow that physically carries heavy, immobile Iron up to the new shoots.\n2. The Acidifier (S): Sulfur lowers the micro-pH in the root zone, naturally unlocking native Iron in the soil.",
    info_Fe_antag: "1. The Twin Rivalry (Fe vs Mn): Iron and Manganese look chemically identical to the plant's roots. High Mn completely blocks Fe uptake, and vice versa. Maintain a strict soil ratio of Fe:Mn ≈ 2:1.\n2. The Calcium Trap: High Ca (limestone/alkaline soils) limits Iron solubility.",
    info_Fe_inhib: "1. Phosphate Lockup: High Phosphorus application binds native soil Iron into Iron Phosphate, an insoluble rock.\n2. Heavy Metal Saturation: Excess Zinc or Copper physically occupies the root carrier channels, locking Iron out.",
    info_Zn_func: "The Master Growth Regulator & Pollen Architect. Zinc is the essential precursor to Tryptophan, the building block of Auxin (the master plant growth hormone). It dictates internode elongation and leaf expansion. Crucially for reproduction, Zinc is a core requirement for DNA/RNA synthesis during the rapid cell division of flowering. It heavily dictates pollen viability, drives pollen tube elongation, and prevents catastrophic flower drop.",
    info_Zn_comm: "Market Forms:\n• Zn-EDTA: Highly stable in most soils (up to pH 7.5). Excellent for fertigation and early foliar.\n• Zinc Sulfate: Cheap and effective, but precipitates quickly in high-pH or high-Phosphorus soils.\n• Zinc Amino Acid Chelates: The absolute fastest foliar penetration. Crucial for pre-flowering rescue sprays because the amino acids directly feed the energy-intensive blooming process.\n• Zinc Oxide: Insoluble rock dust. Extremely slow availability, only useful as a long-term base in acidic soils.",
    info_Zn_app: "Application Strategy (The Pre-Flower Window): Because Zinc is heavily consumed during blooming and directly dictates pollen health, it MUST be loaded into the tree before flowers open. \n\nProtocol: Apply foliar Zn-Amino or Zn-EDTA during the pre-flowering stage (often combined with Boron). ⚠️ The Phosphorus Trap: If applying heavy P (like MKP) to induce flowers, you must apply Zinc 7-10 days BEFORE the Phosphorus to avoid permanent chemical lockup (Zinc Phosphate) in the soil and tissue.",
    info_Zn_def: "Immobile Element Alert: Classic 'Little Leaf' syndrome (new leaves remain tiny) and 'Rosetting' (internodes fail to elongate, causing leaves to bunch together). Reproductive Failure: Massive flower abortion, weak/sterile pollen, and lopsided or deformed fruit due to incomplete pollination.",
    info_Zn_bio: "Amino Acid Synergy: Combining Zinc with Amino Acids acts as a double-accelerator. The amino acids protect the Zinc from locking up, carry it instantly through the leaf cuticle, and provide the exact Tryptophan needed to jumpstart Auxin production.",
    info_Zn_syn: "1. The Growth Twins (N): Nitrogen drives the production of cells, but Zinc (via Auxin) tells those cells to expand to their full, healthy size.\n2. Reproduction (B): Zinc builds the healthy pollen grain, while Boron builds the tube it travels down. Both are mandatory for fruit set.",
    info_Zn_antag: "1. The Phosphate Trap (P): The most famous antagonism in agronomy. High Phosphorus instantly binds with Zinc in the soil, forming insoluble Zinc Phosphate stones. Always apply Zinc before heavy Phosphorus.\n2. Metal Competition (Fe/Cu/Mn): Zinc competes with other heavy metals for root absorption channels.",
    info_Zn_inhib: "1. Iron/Copper Block: Extreme over-application of Zinc will completely saturate root carrier channels, locking out Iron and Copper, which induces artificial deficiencies.",
    info_B_func: "The Floral Architect & Sugar Gatekeeper. Boron is the absolute linchpin for reproduction. When a pollen grain lands on a flower, it must grow a 'pollen tube' down into the ovary to fertilize the seed. Boron physically constructs and directs this tube; without it, the tube ruptures, fertilization fails, and the tree aggressively aborts the flower. Additionally, Boron acts as the 'mortar' that cross-links Calcium pectate in cell walls, and serves as the gatekeeper that allows sugars to cross cell membranes into the fruit.",
    info_B_comm: "Market Forms:\n• Ca-B-Mg Liquid Combos: The industry standard. Boron is rarely applied alone during fruiting. It is bundled with Calcium (the 'bricks') and Magnesium (the 'energy pump') to prevent fruit cracking.\n• Polyol / Sugar Alcohol Boron: The Premium Standard for flowering. Boron is naturally immobile, but this complex tricks the plant into moving Boron freely through the phloem directly to the flowers.\n• Sodium Borate (Solubor - 20% B): Highly soluble, the industry standard for foliar and fertigation. Warning: Raises tank pH significantly.\n• Boric Acid (17% B): Cheaper, acidic, but requires warm water to dissolve properly.\n• Calcium Borate (Ulexite): Slow-release rock form used purely for long-term soil base saturation.",
    info_B_app: "Application Strategy (Two Critical Windows):\n1. The Pre-Bloom Window: Boron moves in soil via water. If it's dry, root uptake is zero. You MUST apply foliar Boron 2-4 weeks BEFORE flowers open so the tree can pack it into buds.\n2. Fruit Expansion (Cracking Prevention): Apply Ca+B combos directly to the fruit every 10-14 days to build skin elasticity.\n⚠️ Toxicity Warning: Boron has the narrowest safety margin of any nutrient. Measure doses precisely; excess will severely burn leaves.",
    info_B_def: "Immobile Element Alert: Catastrophic reproductive failure. Flowers drop en masse without setting fruit. Surviving fruits are often lopsided, deformed, or shaped like a 'C' (due to incomplete seed pollination). Vegetative symptoms include the death of growing points (apical meristems), hollow stems, and thick, corky, cracked fruit skin.",
    info_B_bio: "Sugar Alcohol (Polyol) Synergy: Boron is naturally strictly immobile inside the plant. However, formulating Boron with Sugar Alcohols (Mannitol/Sorbitol) acts as a biological hack, allowing Boron to enter the phloem sap and transport actively from the leaves straight into the high-demand floral buds.",
    info_B_syn: "1. The Mandatory Synergy (Ca): Calcium builds the cell wall, but Boron is the 'mortar' that chemically cross-links the Calcium Pectate. Without Boron, Calcium floats uselessly in the tissue and cannot prevent fruit cracking. This is why commercial foliars strictly bundle Ca+B together.\n2. The Ultimate Combo (Ca + B + Mg): Often sold as a trio. While Ca+B build the physical structure of the expanding fruit, Magnesium (Mg) is bundled in to provide the energy (ATP) required to pump heavy sugars into the fruit, and to prevent the high Calcium from locking out Magnesium locally.\n3. The Sugar Pipeline (K): Potassium creates the pressure to move sap, while Boron opens the membrane gates to let the sugar into the fruit.",
    info_B_antag: "1. The Calcium Lockup (pH): High Calcium levels in the soil (from over-liming) will aggressively trap Boron, rendering it unavailable.\n2. The Dilution Effect (N/K): Fast, explosive vegetative growth driven by high Nitrogen or Potassium physically dilutes the available Boron across too much tissue, inducing a sudden deficiency at the growing tips.",
    info_B_inhib: "1. Extreme Phytotoxicity: Boron toxicity is very common. Over-application causes severe necrosis (burning) starting at the leaf tips/margins, rapidly progressing inward until the leaf drops.",
    info_Mn_func: "The Water Splitter & Defense Activator. Manganese is the critical engine of the Oxygen-Evolving Complex (OEC) in Photosystem II. It literally splits water molecules during photosynthesis to generate the electrons that power the entire plant. Without Mn, photosynthesis stops at step one. It also drives the TCA cycle (cellular respiration) and is heavily involved in synthesizing Lignin, which hardens plant cell walls and roots against pathogen attacks.",
    info_Mn_comm: "Market Forms:\n• Manganese Sulfate (MnSO4): The global standard. Highly soluble, cost-effective, and extremely fast-acting for foliar sprays to rescue deficient trees.\n• Mn-EDTA: A synthetic chelate stable up to pH 7.0. Best used in fertigation systems on delete soils to prevent the Mn from locking up with soil particles.\n• Manganese Oxide (MnO): Highly insoluble rock dust. Completely useless as a quick fix; it only functions as a multi-year slow-release amendment in highly acidic soils.",
    info_Mn_app: "Application Strategy (The pH Seesaw): Manganese is incredibly sensitive to soil pH.\n\n• High pH (> 7.0) Lockout: In alkaline or calcareous soils, Mn rapidly oxidizes into unavailable solid forms. You MUST bypass the soil and use foliar Manganese Sulfate.\n• Low pH (< 5.0) Toxicity Trap: In highly acidic soils, Mn becomes wildly soluble, flooding the roots and causing severe Manganese Toxicity (leaf spotting, crinkling, dropping—often misdiagnosed as a fungal disease). The cure is NOT to add nutrients, but to apply Dolomite Lime to raise the pH and lock the excess Mn safely back into the soil.",
    info_Mn_def: "Immobile Element Alert: Shows up on NEW leaves first. Causes 'Mottled' or 'Checkered' interveinal chlorosis. Unlike Iron deficiency (which has razor-sharp green veins against white tissue), Mn deficiency looks diffuse and blurry, with pale green/yellow spots spreading between the veins.",
    info_Mn_bio: "Fulvic Synergy: Applying Manganese with Fulvic Acid prevents the Mn ions from prematurely oxidizing on the leaf surface, ensuring rapid stomatal entry and utilization.",
    info_Mn_syn: "1. The Armor Builders (Cu): Mn and Copper work synergistically to synthesize Lignin, hardening wood and defending roots against soil-borne pathogens.\n2. Enzyme Activation (K): Potassium and Mn co-activate several key respiratory and energy-transfer enzymes.",
    info_Mn_antag: "1. The Twin Rivalry (Mn vs Fe): Iron and Manganese are chemical twins. They compete fiercely for the exact same root absorption channels. Over-applying Mn will induce severe Iron starvation, and vice versa. Maintain a strict soil ratio of Fe:Mn ≈ 2:1.\n2. The Calcium Block: High Ca (limestone) heavily suppresses Mn uptake at the root zone.",
    info_Mn_inhib: "1. Iron Starvation: Excess Mn completely shuts down Iron transport inside the plant.\n2. Magnesium Displacement: Extreme Mn toxicity can displace Magnesium in the leaf, effectively destroying chlorophyll.",
    info_Cu_func: "The Lignin Builder & Immune Catalyst. Copper is an essential heavy metal that acts as the primary catalyst for synthesizing Lignin—the 'wood' that gives branches their physical strength and structural rigidity. Without it, trees produce soft, weak, 'rubbery' branches that snap under fruit weight. Copper is also a central component of Polyphenol Oxidase, the enzyme responsible for plant immune responses (phytoalexins) and the rapid browning/healing of wounds.",
    info_Cu_comm: "Market Forms & The Heavy Metal Reality:\n• Copper Fungicides (Hydroxide/Oxychloride): Widely used for disease control. Because they coat the leaf, they slowly degrade and provide a steady drip of 'nutritional' copper. Orchards using these rarely need extra Cu fertilizer.\n• Copper Sulfate (Bluestone): Highly soluble, but acts as a ruthless heavy metal salt. Extreme burn risk unless neutralized with lime (creating Bordeaux mixture).\n• Cu-EDTA: The safest form for pure nutritional fertigation or foliar feeding, as the chelate protects the heavy metal from causing immediate tissue scorch.",
    info_Cu_app: "Application Strategy (The Toxicity Threat): Because Copper is a heavy metal, it does NOT degrade in the soil; it accumulates forever. Orchards with decades of Copper fungicide use often suffer from severe soil toxicity, which stunts roots and kills beneficial soil microbes/earthworms.\n\nProtocol: Rely on your standard fungicide program for your Cu nutrition. Only apply targeted Cu-EDTA if soil tests confirm true deficiency (usually only in virgin soils or highly peaty/organic soils).",
    info_Cu_def: "Immobile Element Alert: Severe structural failure in new growth. Branches become abnormally soft, rubbery, and bend into 'S-shapes' or droop heavily (due to zero lignin). Causes severe 'Dieback' where new shoot tips die and turn black. Bark and fruit may develop blisters or oozing gum pockets (Exanthema).",
    info_Cu_bio: "⚠️ The Biostimulant Death Trap: NEVER mix Copper fungicides with Amino Acids or Peptides. Aminos act as 'Trojan Horses', pulling the heavy metal Copper directly through the leaf cuticle and into the cellular cytoplasm instantly, causing catastrophic phytotoxicity (severe leaf scorch and defoliation).",
    info_Cu_syn: "1. The Wood Builders (Mn): Copper and Manganese are the ultimate pair for synthesizing lignin and physically hardening the plant against fungal penetration.\n2. Protein Processing (N): Required to metabolize Nitrogen properly.",
    info_Cu_antag: "1. The Heavy Metal Feud (Zn/Fe/Mn): Excess soil Copper strongly competes for root absorption sites, aggressively locking out Zinc, Iron, and Manganese.\n2. High Organic Matter Trap: Copper binds tighter to soil organic matter (humus/peat) than any other micronutrient, causing severe lockup.",
    info_Cu_inhib: "1. Root Tip Necrosis: Excess heavy metal Copper in the soil permanently stunts, thickens, and kills delicate root tips, destroying the plant's nutrient foraging ability.\n2. Phosphorus Block: High soil P reduces Copper solubility.",
    info_Mo_func: "The Nitrogen Converter & Protein Enabler. Molybdenum is the crucial metal cofactor for two vital enzymes: Nitrate Reductase and Nitrogenase. When a plant absorbs Nitrate (NO3) from the soil, it cannot use it directly. It MUST use Nitrate Reductase to convert that NO3 into Ammonium (NH4) before making amino acids. Without Mo, this process halts. Nitrates accumulate in the leaves to toxic levels (attracting pests), while the plant simultaneously starves for protein. In legumes, Mo is mandatory for bacteria to fix nitrogen from the air.",
    info_Mo_comm: "Market Forms:\n• Sodium Molybdate (39% Mo): The global industry standard. Highly soluble. Because plants need so little Mo, this is typically applied in micro-doses (grams per hectare).\n• Ammonium Molybdate (54% Mo): Higher concentration, highly soluble alternative.\n💡 The pH Anomaly: Mo is the ONLY micronutrient that becomes MORE available in alkaline soils and completely locks up in acidic soils (pH < 5.5).",
    info_Mo_app: "Application Strategy (The Micro-Dose Rule): Plants require Molybdenum in parts-per-billion. \n\nProtocol: In highly acidic soils where Mo is locked up, foliar application of Sodium Molybdate is the most efficient rescue method. It is also widely used as a seed treatment for legumes to supercharge root nodules for Nitrogen fixation. \n⚠️ Warning: Over-application is rarely toxic to the plant itself, but causes fatal copper deficiency (Molybdenosis) in ruminant animals grazing on the crop.",
    info_Mo_def: "Mobile Element Alert: Because Mo is tied entirely to Nitrogen processing, its deficiency looks exactly like N deficiency (pale green/yellow older leaves). However, unique hallmarks include 'Whiptail' (leaves become twisted, elongated, and deformed) and marginal leaf scorch (caused by toxic, unprocessed nitrates burning the leaf edges from the inside out).",
    info_Mo_syn: "1. The Nitrogen Key (N): Mo unlocks Nitrogen. Applying heavy Nitrate fertilizers without adequate Mo is like giving the plant food it cannot digest.\n2. Phosphorus Pull (P): High Phosphorus levels in the soil actively enhance the root's ability to absorb Molybdate.",
    info_Mo_antag: "1. The Sulfate Shield (S): The Molybdate ion (MoO4²⁻) and the Sulfate ion (SO4²⁻) are virtually identical in size and electrical charge. Heavy applications of Sulfur will aggressively outcompete Mo for root entry, inducing severe Mo deficiency.",
    info_Mo_inhib: "1. Acid Soil Lockout: Soil pH below 5.5 causes iron and aluminum oxides to bind Molybdate into insoluble rocks.\n2. Copper Feud: Extremely high Mo levels can restrict Copper availability within plant tissues.",
    info_Cl_func: "The Osmotic Balancer. Chlorine (absorbed as Chloride, Cl⁻) is a micronutrient essential for regulating stomatal opening, maintaining cell turgor (water pressure) and balancing electrical charges within the plant. It also plays a minor but vital role in photosynthesis (assisting the water-splitting process in Photosystem II). While most broadleaf crops only need it in microscopic trace amounts, certain salt-tolerant crops rely on it heavily for water management.",
    info_Cl_comm: "Market Forms & The Chloride Threat:\n• MOP (Muriate of Potash / KCl): Contains ~47% Chloride. It is the cheapest source of Potassium, but the massive Chloride payload is highly toxic to sensitive crops.\n• SOP (Sulfate of Potash): The safe, low-chloride alternative.\n⚠️ The Durian Trap: Durian, avocado, and citrus are 'Chloride-Phobic'. Because they lack the genetic mechanism to exclude Cl at the roots, it accumulates rapidly in the leaves. This causes severe tip burn (marginal scorch), premature defoliation, and destroys the creamy texture and complex flavor of premium fruit.",
    info_Cl_app: "Application Strategy (Crop Specific):\n• Chloride-Haters (Durian, Citrus, Berries, Tobacco): STRICTLY AVOID MOP. You must use SOP (Sulfate of Potash) or Potassium Nitrate to supply K without the toxic Cl payload.\n• Chloride-Lovers (Oil Palm, Coconut, Sugar Beet, Celery): These crops actively require massive amounts of Chloride to regulate osmotic pressure and maximize yield. For them, cheap MOP is actually agronomically superior to SOP.",
    info_Cl_def: "Extremely rare in nature, as rainfall, irrigation water, and coastal sea breezes usually provide more than enough. If deficient, leaves will wilt suddenly at the margins (even when the soil is completely wet), and roots become highly branched but stubby and thick.",
    info_Cl_syn: "1. The Osmotic Pair (K): Chloride works directly with Potassium to open and close the stomata, regulating the plant's water loss during heat stress.\n2. Water Splitter (Mn): Works alongside Manganese in the chloroplasts to drive photosynthesis.",
    info_Cl_antag: "1. The Nitrate War: Chloride (Cl⁻) and Nitrate (NO3⁻) are both small, negatively charged anions. Heavy use of high-chloride fertilizers will aggressively compete with and suppress the plant's ability to absorb essential Nitrogen.\n2. Salt Stress: High soil Cl contributes to severe osmotic stress, effectively pulling water out of the roots.",
    info_Ni_func: "The Urea Digester & Metabolic Catalyst. Nickel is the mandatory metallic cofactor for the enzyme Urease. When plants absorb Urea (either from soil or foliar sprays), they must break it down into usable Ammonia and Carbon Dioxide. Without Nickel, this process is impossible; Urea accumulates to highly toxic levels and burns the plant from the inside out. It also plays a key role in seed germination and disease resistance.",
    info_Ni_comm: "Market Forms:\n• Nickel Sulfate: Highly soluble, typically applied in extreme micro-doses.\n• Nickel Lignosulfonate / Chelates: Used for rapid and safe foliar penetration.\n⚠️ Commercial Reality: Because plants need Nickel in microscopic amounts (parts per billion), it is rarely sold as a standalone fertilizer. Most agricultural soils have sufficient native Nickel, and it often arrives as a trace contaminant in other bulk fertilizers.",
    info_Ni_app: "Application Strategy (The Foliar Urea Companion): True soil deficiency is incredibly rare (though it famously causes 'Mouse-Ear' disease in Pecan orchards).\n\nProtocol: The most practical modern agronomic use for Nickel is adding a trace amount to heavy Foliar Urea sprays. This guarantees the plant has enough Urease enzyme to instantly digest the massive influx of Urea without suffering leaf tip scorch (Urea toxicity).",
    info_Ni_def: "Mobile Element Alert: The hallmark physical symptom is 'Mouse-Ear' leaves—new leaves emerge stunted, abnormally rounded, and with blunted tips. The hidden metabolic symptom is severe necrotic (dead/burnt) leaf tips shortly after a heavy Urea application, caused by toxic urea accumulation.",
    info_Ni_syn: "1. The Urea Digester (N): Nickel makes Urea safe. It allows the plant to rapidly convert urea-based nitrogen into amino acids.\n2. Seed Viability: Works synergistically with other trace elements to ensure proper seed development and germination rates.",
    info_Ni_antag: "1. The Heavy Metal Feud: High concentrations of competitive metallic cations—especially Zinc (Zn), Copper (Cu), and Iron (Fe)—will physically block Nickel from entering the root carrier channels.\n2. Alkaline Lockup: Like most micronutrients, Nickel availability drops significantly as soil pH rises above 6.7.",
    info_Ni_inhib: "1. Extreme Phytotoxicity: Because the plant needs so little, accidental over-application is highly toxic, completely stunting roots and mimicking Iron/Zinc deficiency by blocking their metabolic pathways.",
    info_Na_func: "The Osmotic Substitute. While not strictly essential for most crops, Sodium acts as a functional backup for Potassium in maintaining cell turgor (water pressure) and regulating stomatal opening, especially in low-K environments. In specific salt-tolerant plants (halophytes like sugar beets, celery, and spinach), it actively aids in carbon fixation and concentration.",
    info_Na_comm: "The Soil Destroyer (Dispersion/Deflocculation). Sodium is chemically devastating to soil structure. Because the Na+ ion has a massive hydration shell (it holds a thick layer of water around itself), excess Sodium physically forces clay particles apart—a process called 'dispersion'. This destroys crumbly, aggregated soil, turning it into a solid, concrete-like surface crust. Once this happens, water cannot infiltrate, roots suffocate from lack of oxygen (hypoxia), and beneficial soil biology collapses.",
    info_Na_app: "The Rescue Strategy (Gypsum Flushing): You cannot simply 'neutralize' Sodium; you must physically evict it from the root zone.\n\nProtocol: Apply massive amounts of Gypsum (Calcium Sulfate). The heavy, double-charged Calcium (Ca++) acts as a bully, forcefully knocking the Sodium off the clay exchange sites. The freed Sodium then binds with the Sulfate to form Sodium Sulfate—a highly soluble salt that MUST then be flushed deep below the root zone using heavy, clean irrigation.",
    info_Na_def: "Virtually non-existent in field conditions, as rainfall and irrigation provide trace amounts. In pure hydroponic setups, severe lack of Sodium in specific C4 plants might result in very slight growth reductions.",
    info_Na_syn: "1. The Potassium Spare: In soils with marginal Potassium, plants can pump Sodium into their cell vacuoles just to maintain physical water pressure (turgor), saving the scarce Potassium for critical enzymatic functions.",
    info_Na_antag: "1. The Cation Thief (K/Ca): High Sodium strongly outcompetetes Potassium and Calcium for root entry. High Na often induces severe Calcium deficiency (fruit cracking, tip burn) even if soil Calcium levels are perfectly adequate.",
    info_Co_func: "The Microbial Engine & Ethylene Controller. Cobalt is a non-essential element for most higher plants but is absolutely mandatory for the Nitrogen-fixing bacteria ($Rhizobium$) living in the root nodules of legumes. It is the central atom of the Cobalamin ($Vitamin B_{12}$) molecule, which drives the enzymatic conversion of atmospheric Nitrogen into plant-available forms. Emerging research also shows Cobalt inhibits Ethylene synthesis, potentially extending fruit shelf-life and delaying ripening-induced drop.",
    info_Co_comm: "Market Forms:\n• Cobalt Sulfate ($CoSO_4$): Highly soluble, the standard for nutritional applications.\n• Cobalt Nitrate: Used in specialized fertigation programs.\n• Cobalt Carbonate: Low solubility rock form, used for multi-year soil baseline building.\n⚠️ Reality: Required in extreme trace amounts (parts-per-billion). Often present as a trace contaminant in nickel or copper fertilizers.",
    info_Co_app: "Application Strategy (The Nitrogen Amplifier): Apply primarily to leguminous cover crops (like Mucuna bracteata in durian orchards) to maximize their Nitrogen-fixing potential, effectively providing 'free' N to the main crop. \n\nProtocol: Usually applied as a seed treatment or a trace foliar spray. In fruit crops, it can be applied pre-harvest to modulate ethylene levels and prevent premature fruit drop under extreme heat stress.",
    info_Co_def: "Mobile Element Alert: Symptoms in legumes look identical to Nitrogen deficiency (general yellowing of old leaves) because the root nodules have failed. Legumes will show pale, white, or green nodules instead of the healthy, pinkish-red 'leghamoglobin' color that indicates active $N_2$ fixation.",
    info_Co_syn: "1. The Fixation Duo (N): Cobalt provide the 'engine' ($B_{12}$) for Nitrogen fixation, making it Nitrogen's ultimate silent partner.\n2. Molybdenum ($Mo$): Both are mandatory co-factors for the nitrogenase enzyme complex.",
    info_Co_antag: "1. The Manganese Rivalry ($Mn$): High soil Manganese ($Mn^{2+}$) will aggressively outcompete Cobalt for absorption channels, leading to $N$ fixation failure even in fertile soils.\n2. Heavy Metal Congestion: Excess Zinc or Nickel will physically block Cobalt uptake channels.",
    info_AA_func: "The 'Ferrari' of Nutrition & Energy Saver. Amino Acids are the building blocks of proteins. Normally, a plant spends 25% of its total metabolic energy converting inorganic Nitrogen (Nitrate/Ammonium) into proteins. By applying Amino Acids, the plant skips this costly process, allowing it to re-direct that saved energy toward fruit production or stress defense. Key Aminos include:\n• Proline: The 'Osmotic Shield' that protects cells from drought and heat.\n• Glycine: The smallest AA, acting as a natural chelator to carry heavy metals into the plant.\n• Glutamic Acid: The 'Metabolic Hub' that triggers the entire Nitrogen pathway.",
    info_AA_comm: "Market Forms & The FAA Surge:\n• Plant-Based AA (Soy/Corn): High in L-Amino acids, clean, and extremely safe for all stages. Best for general stress management.\n• Animal-Based AA: High in Hydroxyproline. Often cheaper, used for bulk vegetative pushing.\n• Fish Amino Acids (FAA): The 'Heavy Lifter'. Heavily recommended because cold-processed fish fermentation preserves not just aminos, but massive levels of natural Peptides, Marine Minerals, and Growth Hormones (Auxins/Cytokinins). \n💡 Why FAA? FAA provides a unique 'Growth Surge' and 'Root Explosion' that plant-based aminos cannot match. It is the gold standard for recovering 'exhausted' trees post-harvest and stimulating soil microbes.",
    info_AA_app: "Application Strategy (The Stress & Recovery Hack): \n• Recovery: After flooding, heavy rain, or severe heat, apply FAA immediately to restart the root system and rebuild energy reserves.\n• Cold/Overcast Weather: When sunlight is low and photosynthesis is slow, AAs provide 'pre-digested' food to keep the plant moving.\n• Pesticide Buffer: Mixing AAs with pesticides (except Copper/Sulfur) reduces 'spray shock' on the leaves.",
    info_AA_def: "Non-essential but visible as 'General Stagnation'. Trees lacking organic amino supply struggle to recover from stress, show slow leaf expansion, and have poor fruit set compared to trees on an amino-fortified program.",
    info_AA_syn: "1. The Chelation Partner (Fe/Zn/Cu): Aminos wrap around metal nutrients, neutralizing their charge and allowing them to 'slip' through the leaf cuticle effortlessly.\n2. The N-Booster: Synergizes with all Nitrogen forms to accelerate protein synthesis.",
    info_AA_antag: "1. Fungicide Warning: High concentrations of AAs can reduce the efficacy of some contact fungicides by pulling them too deep into the plant tissue.\n2. Copper/Sulfur Clash: See inhibition below.",
    info_AA_inhib: "1. The Copper Scorch: NEVER mix Amino Acids (especially FAA) with Copper-based fungicides. The AAs will carry the heavy metal Copper directly into the plant cells, causing severe chemical burn and defoliation.",
    info_Pep_func: "The Physiological 'Software' & Signal Messengers. Peptides are short chains of amino acids (usually <50) that act as the plant's internal biological software. Unlike individual Amino Acids which are 'bricks' (food/materials), Peptides provide the 'instructions' for the plant's metabolic engine. They trigger systemic responses such as explosive root initiation, flower bud development, and the thickening of cell membranes. Most crucially, Peptides act as advanced biological escorts for heavy, immobile nutrients like Calcium.",
    info_Pep_comm: "Market Forms:\n• Fish Peptides (Cold Processed): The Gold Standard. Rich in marine signal molecules that trigger rapid recovery and growth surges. \n• Soy/Vegetable Peptides: High-purity chains, excellent for foliar application during flowering and fruit setting.\n• Peptones: Standard agricultural grade, used for boosting soil microbial activity and providing a steady signal for vegetative growth.\n💡 Why Peptides over Aminos? Individual Aminos feed the plant; Peptides RE-PROGRAM the plant to better handle stress and uptake nutrients.",
    info_Pep_app: "Application Strategy (The 'Trojan Horse' Hack):\n• Cracking Prevention (Ca-Pep): Peptides increase cell membrane permeability. Mixing Peptides with foliar Calcium during fruit set and expansion allows the plant to pull the heavy Calcium directly into the fruit phloem—bypassing the slow upward xylem flow.\n• Root Initiation: Apply via soil drench during transplanting or after a heavy pest attack to signal the plant to rebuild its root mass instantly.\n• Drought Signaling: Apply right before a hot season to signal the plant to strengthen cell walls against water loss.",
    info_Pep_def: "Visible as 'Metabolic Stagnation'. Plants without peptide support exhibit poor response to fertilizers, higher rates of fruit cracking (even with adequate Ca), and a sluggish recovery after environmental shocks (heat, flooding, or herbicide damage).",
    info_Pep_syn: "1. The Calcium Courier (Ca): Peptides are the most efficient natural delivery systems for Calcium, ensuring it reaches the fruit skin where it's needed for elasticity.\n2. Hormone Synergy: Peptides act as precursors that amplify the effect of natural Auxins and Cytokinins during flowering.",
    info_Pep_antag: "1. Strong Oxidizers: Avoid mixing with high-concentration Chlorine or Hydrogen Peroxide cleaners, which can physically break the delicate peptide chains.\n2. Metal Clash: See inhibition below.",
    info_Pep_inhib: "1. The Heavy Metal Scorch: Never mix Peptides (especially Fish Peptides) with Copper fungicides. The Peptides will pull the toxic heavy metal Copper into the cell cytoplasm instantly, causing severe tissue death.\n2. pH Denaturation: Extremely high (>10.0) or low (<3.0) tank mix pH will denature (break) the peptide chains, rendering their signaling messages useless.",
    // --- pH Chart Translations ---
    ph_chart_title: "pH Availability Chart",
    ph_chart_desc: "Interactive chart showing nutrient efficiency at different pH levels.",
    ph_current: "Current pH",
    ph_optimal: "Ideal",
    ph_sufficient: "Sufficient",
    ph_limited: "Limited",
    ph_tip_optimal_title: "pH Management: Gold Zone",
    ph_tip_optimal_desc: "Perfect! This is the 'Goldilocks Zone'. Most nutrients are chemically available. Maintain Organic Matter to buffer this.",
    ph_tip_acidic_title: "Acidic Correction Strategy",
    ph_tip_acidic_desc: "At pH {val}, {list} are locked up. Action: Apply Dolomite Lime (GML) 2-4 weeks before fertilizing. Avoid Urea until pH rises.",
    ph_tip_alkaline_title: "Alkaline Correction Strategy",
    ph_tip_alkaline_desc: "At pH {val}, {list} precipitate out. Soil application ineffective. Action: Use Foliar sprays for micros. Apply Sulfur to lower pH slowly.",
    ph_others: "etc.",
    ph_macros: "Macronutrients",
    ph_breakdown_title: "Detailed Availability Breakdown"
  }
};
const MIX_RULES = [{
  a: 'mix_ca_mg',
  b: 'mix_boron',
  status: 'status_caution',
  reason: 'mix_reason_ratio_complex'
}, {
  a: 'mix_silicate',
  b: 'mix_acids',
  status: 'status_incompatible',
  reason: 'mix_reason_silica_gel'
}, {
  a: 'mix_silicate',
  b: 'mix_calnit',
  status: 'status_incompatible',
  reason: 'mix_reason_silica_ca'
}, {
  a: 'mix_zinc',
  b: 'mix_phos',
  status: 'status_incompatible',
  reason: 'mix_reason_zn_phos'
}, {
  a: 'mix_calnit',
  b: 'mix_phos',
  status: 'status_incompatible',
  reason: 'mix_reason_ppt_white'
}, {
  a: 'mix_calnit',
  b: 'mix_sulf',
  status: 'status_incompatible',
  reason: 'mix_reason_ppt_gyp'
}, {
  a: 'mix_mag',
  b: 'mix_phos',
  status: 'status_caution',
  reason: 'mix_reason_ppt_high'
}, {
  a: 'mix_iron',
  b: 'mix_phos',
  status: 'status_incompatible',
  reason: 'mix_reason_lockup'
}, {
  a: 'mix_urea',
  b: 'mix_amm_nit',
  status: 'status_incompatible',
  reason: 'mix_reason_wet'
}, {
  a: 'mix_ammonium',
  b: 'mix_seaweed',
  status: 'status_caution',
  reason: 'mix_reason_nh4_alkali'
}, {
  a: 'mix_humic',
  b: 'mix_calnit',
  status: 'status_incompatible',
  reason: 'mix_reason_humate_sludge'
}, {
  a: 'mix_amino',
  b: 'mix_copper',
  status: 'status_caution',
  reason: 'mix_reason_copper_burn'
}, {
  a: 'mix_pep',
  b: 'mix_copper',
  status: 'status_caution',
  reason: 'mix_reason_pep_copper'
}, {
  a: 'mix_copper',
  b: 'mix_acids',
  status: 'status_caution',
  reason: 'mix_reason_cu_acid'
}, {
  a: 'mix_seaweed',
  b: 'mix_pesticides',
  status: 'status_caution',
  reason: 'mix_reason_ph_hydrolysis'
}];
const ION_META = {
  N: {
    form: "NO₃⁻ / NH₄⁺",
    leach: "High (NO₃)",
    leach_desc: "High (Anion)",
    grip: "Weak",
    grip_desc: "Weak",
    compete: "Cl⁻, SO₄²⁻, K⁺"
  },
  P: {
    form: "H₂PO₄⁻",
    leach: "Low",
    leach_desc: "Low (Fixation)",
    grip: "Strong",
    grip_desc: "Strong (Chemical)",
    compete: "Zn²⁺, Fe³⁺"
  },
  K: {
    form: "K⁺",
    leach: "Med",
    leach_desc: "Med (Monovalent)",
    grip: "Weak",
    grip_desc: "Weak",
    compete: "Mg²⁺, Ca²⁺"
  },
  S: {
    form: "SO₄²⁻",
    leach: "High",
    leach_desc: "High (Anion)",
    grip: "None",
    grip_desc: "None",
    compete: "NO₃⁻, MoO₄²⁻"
  },
  Ca: {
    form: "Ca²⁺",
    leach: "Low",
    leach_desc: "Low (Divalent)",
    grip: "Strong",
    grip_desc: "Strong",
    compete: "K⁺, Mg²⁺"
  },
  Mg: {
    form: "Mg²⁺",
    leach: "Low",
    leach_desc: "Low (Divalent)",
    grip: "Strong",
    grip_desc: "Strong",
    compete: "K⁺, Ca²⁺"
  },
  Fe: {
    form: "Fe²⁺ / Fe³⁺",
    leach: "Very Low",
    leach_desc: "Very Low",
    grip: "Strong",
    grip_desc: "Strong (Precipitate)",
    compete: "Mn²⁺, Zn²⁺"
  },
  Mn: {
    form: "Mn²⁺",
    leach: "Low",
    leach_desc: "Low",
    grip: "Strong",
    grip_desc: "Strong",
    compete: "Fe²⁺"
  },
  B: {
    form: "H₃BO₃",
    leach: "High",
    leach_desc: "High (Non-ionic)",
    grip: "Weak",
    grip_desc: "Weak (Water flow)",
    compete: "Ca²⁺ (Physio)"
  },
  Cu: {
    form: "Cu²⁺",
    leach: "Very Low",
    leach_desc: "Very Low",
    grip: "Strong",
    grip_desc: "Strong (Organic)",
    compete: "Zn²⁺, N"
  },
  Zn: {
    form: "Zn²⁺",
    leach: "Low",
    leach_desc: "Low",
    grip: "Strong",
    grip_desc: "Strong",
    compete: "P, Fe²⁺"
  },
  Mo: {
    form: "MoO₄²⁻",
    leach: "High",
    leach_desc: "High",
    grip: "Weak",
    grip_desc: "Weak",
    compete: "SO₄²⁻"
  },
  Si: {
    form: "Si(OH)₄",
    leach: "Med",
    leach_desc: "Med",
    grip: "Med",
    grip_desc: "Med",
    compete: "None"
  },
  Cl: {
    form: "Cl⁻",
    leach: "High",
    leach_desc: "Very High",
    grip: "None",
    grip_desc: "None",
    compete: "NO₃⁻"
  },
  Ni: {
    form: "Ni²⁺",
    leach: "Low",
    leach_desc: "Low",
    grip: "Strong",
    grip_desc: "Strong",
    compete: "Zn²⁺"
  },
  Na: {
    form: "Na⁺",
    leach: "High",
    leach_desc: "High",
    grip: "Weak",
    grip_desc: "Weak",
    compete: "K⁺, Ca²⁺"
  },
  Co: {
    form: "Co²⁺",
    leach: "Low",
    leach_desc: "Low",
    grip: "Strong",
    grip_desc: "Strong",
    compete: "Mn²⁺"
  },
  AA: {
    form: "Zwitterion",
    leach: "Low",
    leach_desc: "Low (Smart)",
    grip: "Med",
    grip_desc: "Med (Dual)",
    compete: "None"
  },
  Pep: {
    form: "Polypeptide",
    leach: "Low",
    leach_desc: "Low",
    grip: "Med",
    grip_desc: "Med",
    compete: "None"
  }
};
const PH_AVAILABILITY_DATA = [{
  id: 'N',
  name: 'Nitrogen',
  color: '#10B981',
  points: [[4, 0.2], [5.5, 0.5], [6, 1], [8, 1], [9, 0.5]]
}, {
  id: 'P',
  name: 'Phosphorus',
  color: '#F59E0B',
  points: [[4, 0.1], [5, 0.2], [6, 0.5], [6.5, 1], [7.5, 1], [8, 0.5], [8.5, 0.2]]
}, {
  id: 'K',
  name: 'Potassium',
  color: '#3B82F6',
  points: [[4, 0.2], [5.5, 0.5], [6, 1], [9, 1]]
}, {
  id: 'S',
  name: 'Sulfur',
  color: '#EAB308',
  points: [[4, 0.2], [5.5, 0.5], [6, 1], [9, 1]]
}, {
  id: 'Ca',
  name: 'Calcium',
  color: '#6366F1',
  points: [[4, 0.1], [5.5, 0.3], [6.5, 1], [9, 1]]
}, {
  id: 'Mg',
  name: 'Magnesium',
  color: '#8B5CF6',
  points: [[4, 0.1], [5.5, 0.3], [6.5, 1], [9, 1]]
}, {
  id: 'Fe',
  name: 'Iron',
  color: '#9CA3AF',
  points: [[4, 1], [6, 1], [6.5, 0.5], [7.5, 0.1], [9, 0]]
}, {
  id: 'Mn',
  name: 'Manganese',
  color: '#A8A29E',
  points: [[4, 1], [5.5, 1], [6.5, 0.8], [7.5, 0.2], [9, 0]]
}, {
  id: 'B',
  name: 'Boron',
  color: '#F97316',
  points: [[4, 0.3], [5, 1], [7, 1], [7.5, 0.5], [9, 0]]
}, {
  id: 'Cu',
  name: 'Copper',
  color: '#D97706',
  points: [[4, 1], [6, 1], [7, 0.5], [8, 0.2]]
}, {
  id: 'Zn',
  name: 'Zinc',
  color: '#78716C',
  points: [[4, 1], [5.5, 1], [7, 0.5], [8, 0.1]]
}, {
  id: 'Mo',
  name: 'Molybdenum',
  color: '#14B8A6',
  points: [[4, 0], [5.5, 0.2], [7, 1], [9, 1]]
}, {
  id: 'Si',
  name: 'Silicon',
  color: '#94A3B8',
  points: [[4, 0.2], [5, 0.3], [6, 0.6], [7, 0.8], [8, 1], [9, 1]]
}, {
  id: 'Cl',
  name: 'Chlorine',
  color: '#34D399',
  points: [[4, 1], [9, 1]]
}, {
  id: 'Ni',
  name: 'Nickel',
  color: '#71717A',
  points: [[4, 1], [5.5, 1], [7, 0.8], [8, 0.3], [9, 0.1]]
}, {
  id: 'Na',
  name: 'Sodium',
  color: '#A78BFA',
  points: [[4, 1], [9, 1]]
}, {
  id: 'Co',
  name: 'Cobalt',
  color: '#52525B',
  points: [[4, 1], [5.5, 1], [7, 0.6], [8, 0.2], [9, 0.1]]
}, {
  id: 'AA',
  name: 'AminoAcids',
  color: '#F472B6',
  points: [[4, 0.8], [5, 1], [8, 1], [9, 0.7]]
}, {
  id: 'Pep',
  name: 'Peptides',
  color: '#EC4899',
  points: [[4, 0.8], [5, 1], [8, 1], [9, 0.7]]
}];
const NUTRIENTS = [{
  id: 'N',
  name: 'Nitrogen',
  type: 'Macro',
  mobility: 'Mobile',
  antagonism: ['K', 'B', 'Cu', 'P'],
  threshold: 3.0,
  inhibition: [{
    el: 'B',
    val: '> 3.5%'
  }, {
    el: 'Cu',
    val: '> 4%'
  }],
  synergy: ['Mg', 'Mo', 'S', 'AA'],
  sources: ['src_urea', 'src_amsul', 'src_calnit', 'src_kno3'],
  enzymes: [{
    name: 'Nitrate Reductase',
    func: 'Gatekeeper of N-Assimilation (NO3 → NO2)',
    zh_name: 'Nitrate Reductase',
    zh_func: 'Gatekeeper of N-Assimilation (NO3 → NO2)'
  }, {
    name: 'RuBisCO',
    func: 'Photosynthesis Engine (Fixes CO2)',
    zh_name: 'RuBisCO',
    zh_func: 'Photosynthesis Engine (Fixes CO2)'
  }, {
    name: 'PAL',
    func: 'Defense & Lignin Synthesis',
    zh_name: 'PAL',
    zh_func: 'Defense & Lignin Synthesis'
  }, {
    name: 'GA Synthase',
    func: 'Stem Elongation (Gibberellins)',
    zh_name: 'GA Synthase',
    zh_func: 'Stem Elongation (Gibberellins)'
  }],
  optimal_levels: {
    soil: {
      min: 20,
      max: 40,
      unit: 'ppm (mg/kg)'
    },
    leaf: {
      vegetative: {
        min: 2.5,
        max: 3.0,
        unit: '%'
      },
      fruiting: {
        min: 2.0,
        max: 2.5,
        unit: '%'
      }
    }
  }
}, {
  id: 'P',
  name: 'Phosphorus',
  type: 'Macro',
  mobility: 'Mobile',
  antagonism: ['Zn', 'Fe', 'Cu', 'Ca', 'K'],
  threshold: 3.5,
  inhibition: [{
    el: 'Zn',
    val: '> 100ppm'
  }, {
    el: 'Fe',
    val: '> 150ppm'
  }],
  synergy: ['Mg', 'Mo'],
  sources: ['src_dap', 'src_map', 'src_rock_phos', 'src_polyphos'],
  enzymes: [{
    name: 'ATP Synthase',
    func: 'Generates ATP (Cellular Battery)',
    zh_name: 'ATP Synthase',
    zh_func: 'Generates ATP (Cellular Battery)'
  }, {
    name: 'GAPDH',
    func: 'Calvin Cycle (Sugar Production)',
    zh_name: 'GAPDH',
    zh_func: 'Calvin Cycle (Sugar Production)'
  }, {
    name: 'Phosphofructokinase',
    func: 'Pacemaker of Glycolysis',
    zh_name: 'Phosphofructokinase',
    zh_func: 'Pacemaker of Glycolysis'
  }],
  optimal_levels: {
    soil: {
      min: 20,
      max: 40,
      unit: 'ppm (mg/kg)'
    },
    leaf: {
      vegetative: {
        min: 0.15,
        max: 0.25,
        unit: '%'
      },
      fruiting: {
        min: 0.20,
        max: 0.30,
        unit: '%'
      }
    }
  }
}, {
  id: 'K',
  name: 'Potassium',
  type: 'Macro',
  mobility: 'Mobile',
  antagonism: ['Mg', 'Ca', 'N', 'B'],
  threshold: 4.0,
  inhibition: [{
    el: 'Mg',
    val: '> 3.5%'
  }, {
    el: 'B',
    val: '> 250ppm'
  }],
  synergy: ['Fe', 'Mn'],
  sources: ['src_mop', 'src_sop', 'src_kno3', 'src_kmg_sulf'],
  enzymes: [{
    name: 'Pyruvate Kinase',
    func: 'Final Step of Energy Production',
    zh_name: 'Pyruvate Kinase',
    zh_func: 'Final Step of Energy Production'
  }, {
    name: 'Starch Synthase',
    func: 'Fruit Filling (Sugar to Starch)',
    zh_name: 'Starch Synthase',
    zh_func: 'Fruit Filling (Sugar to Starch)'
  }, {
    name: 'ABA Synthase',
    func: 'Stomatal Control (Drought Defense)',
    zh_name: 'ABA Synthase',
    zh_func: 'Stomatal Control (Drought Defense)'
  }],
  optimal_levels: {
    soil: {
      min: 150,
      max: 300,
      unit: 'ppm (mg/kg)'
    },
    leaf: {
      vegetative: {
        min: 1.5,
        max: 2.0,
        unit: '%'
      },
      fruiting: {
        min: 2.0,
        max: 2.8,
        unit: '%'
      }
    }
  }
}, {
  id: 'Ca',
  name: 'Calcium',
  type: 'Secondary',
  mobility: 'Immobile',
  antagonism: ['Mg', 'K', 'B', 'Mn', 'Fe', 'Zn'],
  threshold: 2.5,
  inhibition: [{
    el: 'Mg',
    val: 'val_ratio_7_1'
  }, {
    el: 'B',
    val: 'val_high_ph_ca_b'
  }],
  synergy: ['Si', 'Pep'],
  sources: ['src_dolomite', 'src_gypsum', 'src_calnit', 'src_lime'],
  enzymes: [{
    name: 'Peroxidase',
    func: 'Cell Wall Cross-linking (Rigidity)',
    zh_name: 'Peroxidase',
    zh_func: 'Cell Wall Cross-linking (Rigidity)'
  }, {
    name: 'Cellulose Synthase',
    func: 'Builds Structural Skeleton',
    zh_name: 'Cellulose Synthase',
    zh_func: 'Builds Structural Skeleton'
  }, {
    name: 'Alpha-Amylase',
    func: 'Seed Germination (Starch Breakdown)',
    zh_name: 'Alpha-Amylase',
    zh_func: 'Seed Germination (Starch Breakdown)'
  }],
  optimal_levels: {
    soil: {
      min: 1000,
      max: 2500,
      unit: 'ppm (mg/kg)'
    },
    leaf: {
      vegetative: {
        min: 1.5,
        max: 2.5,
        unit: '%'
      },
      fruiting: {
        min: 1.8,
        max: 2.5,
        unit: '%'
      }
    }
  }
}, {
  id: 'Mg',
  name: 'Magnesium',
  type: 'Secondary',
  mobility: 'Mobile',
  antagonism: ['Ca', 'K'],
  threshold: 0.8,
  inhibition: [{
    el: 'Ca',
    val: '> 1.0%'
  }],
  synergy: ['P', 'N'],
  sources: ['src_kieserite', 'src_dolomite', 'src_mg_oxide', 'src_mg_nitrate'],
  enzymes: [{
    name: 'RuBisCO',
    func: 'Activates Carbon Fixation',
    zh_name: 'RuBisCO',
    zh_func: 'Activates Carbon Fixation'
  }, {
    name: 'Hexokinase',
    func: 'Kickstarts Sugar Metabolism',
    zh_name: 'Hexokinase',
    zh_func: 'Kickstarts Sugar Metabolism'
  }, {
    name: 'Glutamine Synthetase',
    func: 'Ammonium Detoxification',
    zh_name: 'Glutamine Synthetase',
    zh_func: 'Ammonium Detoxification'
  }],
  optimal_levels: {
    soil: {
      min: 100,
      max: 250,
      unit: 'ppm (mg/kg)'
    },
    leaf: {
      vegetative: {
        min: 0.25,
        max: 0.50,
        unit: '%'
      },
      fruiting: {
        min: 0.30,
        max: 0.50,
        unit: '%'
      }
    }
  }
}, {
  id: 'S',
  name: 'Sulfur',
  type: 'Secondary',
  mobility: 'Immobile',
  antagonism: ['Mo', 'Ca', 'AA'],
  threshold: 0.5,
  inhibition: [{
    el: 'Mo',
    val: '> 1%'
  }],
  synergy: ['N', 'Zn', 'Mn', 'Cu'],
  sources: ['src_amsul', 'src_elem_sulfur', 'src_gypsum', 'src_sop'],
  enzymes: [{
    name: 'Glutathione Reductase',
    func: 'Regenerates Antioxidants',
    zh_name: 'Glutathione Reductase',
    zh_func: 'Regenerates Antioxidants'
  }, {
    name: 'Nitrogenase',
    func: 'Biological N-Fixation',
    zh_name: 'Nitrogenase',
    zh_func: 'Biological N-Fixation'
  }, {
    name: 'Coenzyme A',
    func: 'Fatty Acid & Energy Metabolism',
    zh_name: 'Coenzyme A',
    zh_func: 'Fatty Acid & Energy Metabolism'
  }],
  optimal_levels: {
    soil: {
      min: 20,
      max: 50,
      unit: 'ppm (mg/kg)'
    },
    leaf: {
      vegetative: {
        min: 0.20,
        max: 0.40,
        unit: '%'
      },
      fruiting: {
        min: 0.20,
        max: 0.40,
        unit: '%'
      }
    }
  }
}, {
  id: 'Fe',
  name: 'Iron',
  type: 'Micro',
  mobility: 'Immobile',
  antagonism: ['Mn', 'Zn', 'P', 'Cu'],
  threshold: 0.5,
  inhibition: [{
    el: 'Mn',
    val: 'val_ratio_1_5'
  }],
  synergy: ['K', 'AA'],
  sources: ['src_fe_sulf', 'src_fe_edta', 'src_fe_eddha', 'src_fe_amsul'],
  enzymes: [{
    name: 'Catalase',
    func: 'Neutralizes Toxic Hydrogen Peroxide',
    zh_name: 'Catalase',
    zh_func: 'Neutralizes Toxic Hydrogen Peroxide'
  }, {
    name: 'Nitrite Reductase',
    func: 'Protein Building (NO2 → NH4)',
    zh_name: 'Nitrite Reductase',
    zh_func: 'Protein Building (NO2 → NH4)'
  }, {
    name: 'APX',
    func: 'Chloroplast Antioxidant',
    zh_name: 'APX',
    zh_func: 'Chloroplast Antioxidant'
  }],
  optimal_levels: {
    soil: {
      min: 50,
      max: 150,
      unit: 'ppm (mg/kg)'
    },
    leaf: {
      vegetative: {
        min: 50,
        max: 150,
        unit: 'ppm (mg/kg)'
      },
      fruiting: {
        min: 50,
        max: 150,
        unit: 'ppm (mg/kg)'
      }
    }
  }
}, {
  id: 'Zn',
  name: 'Zinc',
  type: 'Micro',
  mobility: 'Immobile',
  antagonism: ['Fe', 'Cu', 'P'],
  threshold: 0.5,
  inhibition: [{
    el: 'Fe',
    val: '> 150ppm'
  }],
  synergy: ['P', 'Mg', 'AA'],
  sources: ['src_zn_sulf', 'src_zn_edta', 'src_zn_oxide'],
  enzymes: [{
    name: 'IAA Synthase',
    func: 'Auxin Precursor (Tryptophan)',
    zh_name: 'IAA Synthase',
    zh_func: 'Auxin Precursor (Tryptophan)'
  }, {
    name: 'SOD',
    func: 'First Line Antioxidant Defense',
    zh_name: 'SOD',
    zh_func: 'First Line Antioxidant Defense'
  }, {
    name: 'Carbonic Anhydrase',
    func: 'CO2 Supply for Photosynthesis',
    zh_name: 'Carbonic Anhydrase',
    zh_func: 'CO2 Supply for Photosynthesis'
  }],
  optimal_levels: {
    soil: {
      min: 5,
      max: 15,
      unit: 'ppm (mg/kg)'
    },
    leaf: {
      vegetative: {
        min: 20,
        max: 50,
        unit: 'ppm (mg/kg)'
      },
      fruiting: {
        min: 20,
        max: 50,
        unit: 'ppm (mg/kg)'
      }
    }
  }
}, {
  id: 'Mn',
  name: 'Manganese',
  type: 'Micro',
  mobility: 'Immobile',
  antagonism: ['Fe', 'Zn', 'Mg', 'Ca'],
  threshold: 0.5,
  inhibition: [{
    el: 'Fe',
    val: 'val_ratio_2_5'
  }],
  synergy: ['Cu', 'AA'],
  sources: ['src_mn_sulf', 'src_mn_edta', 'src_mn_oxide'],
  enzymes: [{
    name: 'OEC (PSII)',
    func: 'Splits Water (Photosynthesis)',
    zh_name: 'OEC (PSII)',
    zh_func: 'Splits Water (Photosynthesis)'
  }, {
    name: 'SOD',
    func: 'Mitochondrial Protection',
    zh_name: 'Mn-SOD',
    zh_func: 'Mitochondrial Protection'
  }, {
    name: 'Isocitrate Dehydrogenase',
    func: 'TCA Cycle Rate-Limiter',
    zh_name: 'Isocitrate Dehydrogenase',
    zh_func: 'TCA Cycle Rate-Limiter'
  }],
  optimal_levels: {
    soil: {
      min: 20,
      max: 60,
      unit: 'ppm (mg/kg)'
    },
    leaf: {
      vegetative: {
        min: 30,
        max: 100,
        unit: 'ppm (mg/kg)'
      },
      fruiting: {
        min: 30,
        max: 100,
        unit: 'ppm (mg/kg)'
      }
    }
  }
}, {
  id: 'Cu',
  name: 'Copper',
  type: 'Micro',
  mobility: 'Immobile',
  antagonism: ['Zn', 'Fe', 'Mn', 'Mo', 'P', 'AA'],
  threshold: 0.5,
  inhibition: [{
    el: 'Fe',
    val: '> 50ppm'
  }, {
    el: 'AA',
    val: 'val_tank_mix'
  }],
  synergy: [],
  sources: ['src_cu_sulf', 'src_cu_hydrox', 'src_cu_edta'],
  enzymes: [{
    name: 'Laccase',
    func: 'Lignin Synthesis (Wood Hardening)',
    zh_name: 'Laccase',
    zh_func: 'Lignin Synthesis (Wood Hardening)'
  }, {
    name: 'SOD',
    func: 'Cytoplasm/Chloroplast Protection',
    zh_name: 'Cu/Zn-SOD',
    zh_func: 'Cytoplasm/Chloroplast Protection'
  }, {
    name: 'Polyphenol Oxidase',
    func: 'Wound Repair (Browning)',
    zh_name: 'Polyphenol Oxidase',
    zh_func: 'Wound Repair (Browning)'
  }],
  optimal_levels: {
    soil: {
      min: 1,
      max: 5,
      unit: 'ppm (mg/kg)'
    },
    leaf: {
      vegetative: {
        min: 10,
        max: 20,
        unit: 'ppm (mg/kg)'
      },
      fruiting: {
        min: 10,
        max: 20,
        unit: 'ppm (mg/kg)'
      }
    }
  }
}, {
  id: 'B',
  name: 'Boron',
  type: 'Micro',
  mobility: 'Immobile',
  antagonism: ['Ca', 'K', 'N'],
  threshold: 0.5,
  inhibition: [{
    el: 'K',
    val: '> 150ppm'
  }],
  synergy: ['Si', 'Ca'],
  sources: ['src_borax', 'src_boric', 'src_solubor', 'src_ca_borate'],
  optimal_levels: {
    soil: {
      min: 1,
      max: 3,
      unit: 'ppm (mg/kg)'
    },
    leaf: {
      vegetative: {
        min: 20,
        max: 50,
        unit: 'ppm (mg/kg)'
      },
      fruiting: {
        min: 30,
        max: 60,
        unit: 'ppm (mg/kg)'
      }
    }
  }
}, {
  id: 'Mo',
  name: 'Molybdenum',
  type: 'Micro',
  mobility: 'Mobile',
  antagonism: ['Cu', 'S', 'Fe'],
  threshold: 0.5,
  inhibition: [{
    el: 'Cu',
    val: '> 5ppm'
  }],
  synergy: ['N', 'P'],
  sources: ['src_na_moly', 'src_amm_moly'],
  enzymes: [{
    name: 'Nitrate Reductase',
    func: 'Essential Cofactor for N-Reduction',
    zh_name: 'Nitrate Reductase',
    zh_func: 'Essential Cofactor for N-Reduction'
  }, {
    name: 'Nitrogenase',
    func: 'Key for N-Fixation (Legumes)',
    zh_name: 'Nitrogenase',
    zh_func: 'Key for N-Fixation (Legumes)'
  }],
  optimal_levels: {
    soil: {
      min: 0.1,
      max: 0.5,
      unit: 'ppm (mg/kg)'
    },
    leaf: {
      vegetative: {
        min: 0.1,
        max: 0.5,
        unit: 'ppm (mg/kg)'
      },
      fruiting: {
        min: 0.1,
        max: 0.5,
        unit: 'ppm (mg/kg)'
      }
    }
  }
}, {
  id: 'AA',
  name: 'AminoAcids',
  type: 'Biostimulant',
  mobility: 'Mobile',
  antagonism: ['Cu', 'S'],
  threshold: 0,
  inhibition: [{
    el: 'Cu',
    val: 'val_tank_mix'
  }, {
    el: 'S',
    val: 'val_tank_mix'
  }],
  synergy: ['N', 'Fe', 'Zn', 'Mn'],
  sources: ['src_plant_aa', 'src_animal_aa', 'src_fish_aa'],
  enzymes: [{
    name: 'Proline',
    func: 'Stress Tolerance (Drought/Heat/Salt)',
    zh_name: 'Proline',
    zh_func: 'Stress Tolerance (Drought/Heat/Salt)'
  }, {
    name: 'Glycine',
    func: 'Chlorophyll Synthesis & Chelation',
    zh_name: 'Glycine',
    zh_func: 'Chlorophyll Synthesis & Chelation'
  }, {
    name: 'Glutamic Acid',
    func: 'Central Hub of N-Metabolism',
    zh_name: 'Glutamic Acid',
    zh_func: 'Central Hub of N-Metabolism'
  }, {
    name: 'Methionine',
    func: 'Precursor to Ethylene (Ripening)',
    zh_name: 'Methionine',
    zh_func: 'Precursor to Ethylene (Ripening)'
  }]
}, {
  id: 'Pep',
  name: 'Peptides',
  type: 'Biostimulant',
  mobility: 'Mobile',
  antagonism: ['Cu', 'S'],
  threshold: 0,
  inhibition: [{
    el: 'Cu',
    val: 'val_tank_mix'
  }, {
    el: 'S',
    val: 'val_tank_mix'
  }],
  synergy: ['Ca', 'K'],
  sources: ['src_fish_pep', 'src_soy_pep']
}, {
  id: 'Si',
  name: 'Silicon',
  type: 'Beneficial',
  mobility: 'Immobile',
  antagonism: [],
  threshold: 1.0,
  inhibition: [],
  synergy: ['Ca', 'N', 'P', 'Zn'],
  sources: ['src_k_silicate', 'src_ca_silicate', 'src_rice_ash']
}, {
  id: 'Cl',
  name: 'Chlorine',
  type: 'Micro',
  mobility: 'Mobile',
  antagonism: ['N', 'S'],
  threshold: 1.0,
  inhibition: [{
    el: 'N',
    val: '>1%'
  }],
  synergy: [],
  sources: ['src_mop', 'src_ca_chlor', 'src_amm_chlor']
}, {
  id: 'Ni',
  name: 'Nickel',
  type: 'Micro',
  mobility: 'Mobile',
  antagonism: ['Zn', 'Fe', 'Cu'],
  threshold: 0.1,
  inhibition: [],
  synergy: [],
  sources: ['src_ni_sulf', 'src_ni_nitr']
}, {
  id: 'Na',
  name: 'Sodium',
  type: 'Beneficial',
  mobility: 'Mobile',
  antagonism: ['K', 'Ca', 'Mg'],
  threshold: 1.0,
  inhibition: [],
  synergy: [],
  sources: ['src_sea_salt', 'src_na_nitr']
}, {
  id: 'Co',
  name: 'Cobalt',
  type: 'Beneficial',
  mobility: 'Immobile',
  antagonism: ['Mn', 'Fe'],
  threshold: 0.1,
  inhibition: [],
  synergy: [],
  sources: ['src_co_sulf', 'src_co_carb']
}];
const SOIL_OPTIONS = {
  texture: [{
    id: 'sand',
    label: 'opt_sand'
  }, {
    id: 'loam',
    label: 'opt_loam'
  }, {
    id: 'clay',
    label: 'opt_clay'
  }],
  om: [{
    id: 'low',
    label: 'opt_low'
  }, {
    id: 'med',
    label: 'opt_med'
  }, {
    id: 'high',
    label: 'opt_high'
  }],
  cation: [{
    id: 'bal',
    label: 'opt_bal'
  }, {
    id: 'hi_ca',
    label: 'opt_hi_ca'
  }, {
    id: 'hi_mg',
    label: 'opt_hi_mg'
  }, {
    id: 'hi_k',
    label: 'opt_hi_k'
  }, {
    id: 'hi_na',
    label: 'opt_hi_na'
  }],
  weather: [{
    id: 'dry',
    label: 'opt_dry',
    icon: Sun
  }, {
    id: 'norm',
    label: 'opt_norm',
    icon: SunDim
  }, {
    id: 'wet',
    label: 'opt_wet',
    icon: CloudRain
  }],
  ec: [{
    id: 'low',
    label: 'opt_ec_low'
  }, {
    id: 'opt',
    label: 'opt_ec_opt'
  }, {
    id: 'high',
    label: 'opt_ec_high'
  }],
  cropStage: [{
    id: 'seedling',
    label: 'opt_stage_seedling'
  }, {
    id: 'veg',
    label: 'opt_stage_veg'
  }, {
    id: 'pre_flower',
    label: 'opt_stage_pre_flower'
  }, {
    id: 'flower_bud',
    label: 'opt_stage_flower_bud'
  }, {
    id: 'matchstick',
    label: 'opt_stage_matchstick'
  }, {
    id: 'bloom',
    label: 'opt_stage_bloom'
  }, {
    id: 'fruit_set',
    label: 'opt_stage_fruit_set'
  }, {
    id: 'fruit_drop_1',
    label: 'opt_stage_fruit_drop_1'
  }, {
    id: 'ping_pong',
    label: 'opt_stage_ping_pong'
  }, {
    id: 'rapid_expansion',
    label: 'opt_stage_rapid_expansion'
  }, {
    id: 'maturation',
    label: 'opt_stage_maturation'
  }, {
    id: 'post_harvest',
    label: 'opt_stage_post_harvest'
  }],
  symptoms: [{
    id: 'none',
    label: 'opt_sym_none'
  }, {
    id: 'yellow_old',
    label: 'opt_sym_yellow_old'
  }, {
    id: 'yellow_new',
    label: 'opt_sym_yellow_new'
  }, {
    id: 'burn',
    label: 'opt_sym_burn'
  }, {
    id: 'stunted',
    label: 'opt_sym_stunted'
  }, {
    id: 'fruit_crack',
    label: 'opt_sym_fruit_crack'
  }, {
    id: 'wet_core',
    label: 'opt_sym_wet_core'
  }],
  cropType: [{
    id: 'durian',
    label: 'opt_crop_durian'
  }, {
    id: 'general',
    label: 'opt_crop_general'
  }],
  cropVariety: [{
    id: 'mk',
    label: 'opt_var_mk'
  }, {
    id: 'bt',
    label: 'opt_var_bt'
  }, {
    id: 'd24',
    label: 'opt_var_d24'
  }, {
    id: 'ioi',
    label: 'opt_var_ioi'
  }, {
    id: 'gp',
    label: 'opt_var_gp'
  }, {
    id: 'rp',
    label: 'opt_var_rp'
  }, {
    id: 'tekka',
    label: 'opt_var_tekka'
  }, {
    id: 'mt',
    label: 'opt_var_mt'
  }, {
    id: 'tk',
    label: 'opt_var_tk'
  }, {
    id: 'd101',
    label: 'opt_var_d101'
  }, {
    id: 'generic',
    label: 'opt_var_generic'
  }]
};

// ==========================================
// 2. HELPER FUNCTIONS
// ==========================================

const getNutrientLabel = id => {
  if (id === 'Humic') return TRANSLATIONS.en.rec_Humic || "Humic Acid";
  const nut = NUTRIENTS.find(n => n.id === id);
  if (!nut) return id;
  const key = 'elem_' + nut.name;
  return TRANSLATIONS.en[key] || nut.name;
};
const analyzeSoilImpact = (nutrientId, soil) => {
  const impacts = [];
  if (!nutrientId) return [];
  const nutName = getNutrientLabel(nutrientId);
  if (nutrientId === 'AA' || nutrientId === 'Pep') {
    if (soil.weather === 'dry') {
      impacts.push({
        level: 'good',
        msg: 'Drought Defense: Helps regulate stomata and retain moisture. Essential during heat/drought.'
      });
    } else if (soil.weather === 'wet') {
      impacts.push({
        level: 'good',
        msg: 'Recovery: Helps rebuild roots and chelate nutrients after heavy rain, reducing leaching loss.'
      });
    }
    if (soil.ec === 'high') {
      impacts.push({
        level: 'good',
        msg: 'Salinity Buffer: Reduces osmotic stress caused by high salts.'
      });
    }
    return impacts;
  }
  if (soil.weather === 'wet') {
    if (['N', 'K', 'Mg', 'S', 'B', 'Cl', 'Mo'].includes(nutrientId)) {
      impacts.push({
        level: 'high',
        msg: `Leaching Alert: Heavy rain will wash ${nutName} away. Re-apply after rain.`
      });
    }
  } else if (soil.weather === 'dry') {
    if (['Ca', 'B'].includes(nutrientId)) {
      impacts.push({
        level: 'high',
        msg: `Absorption Blocked: ${nutName} relies on transpiration pull. Drought stops uptake. Foliar spray required.`
      });
    }
  }
  if (soil.ec === 'high') {
    if (['Fe', 'Mn', 'Zn', 'Cu'].includes(nutrientId)) {
      impacts.push({
        level: 'high',
        msg: `High Salinity (EC): Osmotic stress and potential lockup of micronutrients like ${nutName}.`
      });
    }
  }
  if (soil.ph < 5.5) {
    if (nutrientId === 'N') {
      impacts.push({
        level: 'high',
        msg: 'Nitrogen Source: In acidic soil, avoid Ammonium/Urea (they acidify further). Use Nitrate (e.g., Calcium Nitrate).'
      });
    } else if (['K', 'Ca', 'Mg', 'S', 'Mo'].includes(nutrientId)) {
      impacts.push({
        level: 'high',
        msg: 'Acid Lock: At pH < 5.5, macros and Molybdenum availability drops significantly. Aluminum toxicity may interfere.'
      });
    }
    if (['Fe', 'Mn', 'Zn', 'Cu', 'B'].includes(nutrientId)) {
      impacts.push({
        level: 'low',
        msg: 'Increased Solubility: Micros are highly soluble in acid. Watch for toxicity (esp. Manganese).'
      });
    }
    if (nutrientId === 'P') {
      impacts.push({
        level: 'high',
        msg: 'Al/Fe Fixation: Very High Risk. Phosphorus binds with Aluminum/Iron into insoluble solids.'
      });
    }
  } else if (soil.ph > 7.5) {
    if (['Fe', 'Mn', 'Zn', 'Cu', 'B'].includes(nutrientId)) {
      impacts.push({
        level: 'high',
        msg: 'Alkaline Fixation: At pH > 7.5, micros (except Mo) precipitate. Must use Chelates or Foliar.'
      });
    }
    if (nutrientId === 'P') {
      impacts.push({
        level: 'med',
        msg: 'Calcium Fixation: P binds with Ca to form insoluble Calcium Phosphate.'
      });
    }
    if (nutrientId === 'Mo') {
      impacts.push({
        level: 'good',
        msg: 'High Availability: Molybdenum is most available in alkaline soils.'
      });
    }
  }
  if (soil.texture === 'sand') {
    if (['N', 'K', 'Mg', 'S', 'B'].includes(nutrientId)) {
      impacts.push({
        level: 'high',
        msg: 'Leaching Risk: Sandy soil has low retention (CEC). This element washes away easily. Apply "Little and Often".'
      });
    }
  } else if (soil.texture === 'clay') {
    if (nutrientId === 'K' || nutrientId === 'NH4') {
      impacts.push({
        level: 'med',
        msg: 'Lattice Fixation: Some clays trap K or Ammonium ions in their lattice structure.'
      });
    }
  }
  if (soil.om === 'low') {
    if (['N', 'S'].includes(nutrientId)) {
      impacts.push({
        level: 'med',
        msg: 'Low Reserves: Soil lacks organic N/S banks. Dependent on fertilizers.'
      });
    }
    if (['Fe', 'Zn', 'Cu', 'Mn'].includes(nutrientId)) {
      impacts.push({
        level: 'med',
        msg: 'No Natural Chelation: Low OM means micros are easily fixed by soil mineralogy.'
      });
    }
  } else if (soil.om === 'high') {
    if (nutrientId === 'Cu') {
      impacts.push({
        level: 'high',
        msg: 'Organic Bind: Copper binds very strongly to organic matter, causing deficiency.'
      });
    }
  }
  if (soil.cation === 'hi_ca') {
    if (nutrientId === 'Mg') {
      impacts.push({
        level: 'high',
        msg: 'Ratio Alert (Ca:Mg > 6:1): Excess Ca blocks Mg uptake. Ideal ratio 3-6:1.'
      });
    } else if (nutrientId === 'K') {
      impacts.push({
        level: 'med',
        msg: 'Cation Comp: High Calcium occupies sites, potentially slowing K uptake.'
      });
    } else if (['Fe', 'Mn', 'Zn'].includes(nutrientId)) {
      impacts.push({
        level: 'high',
        msg: 'Lime Induced Chlorosis: High Ca usually means high pH, causing micro precipitation.'
      });
    }
  } else if (soil.cation === 'hi_mg') {
    if (nutrientId === 'Ca') {
      impacts.push({
        level: 'high',
        msg: 'Ratio Alert (Ca:Mg < 3:1): High Mg inhibits Ca. Soil often tight/sticky.'
      });
    } else if (nutrientId === 'K') {
      impacts.push({
        level: 'med',
        msg: 'Cation Comp: High Mg soils struggle to hold K.'
      });
    }
  } else if (soil.cation === 'hi_k') {
    if (nutrientId === 'Mg') {
      impacts.push({
        level: 'high',
        msg: 'Ratio Alert (K:Mg > 2:1): Strong Antagonism. K is a bully to Mg. Foliar Mg required.'
      });
    } else if (nutrientId === 'Ca') {
      impacts.push({
        level: 'high',
        msg: 'Ratio Alert (Ca:K < 10:1): Excess K reduces Ca efficiency.'
      });
    } else if (nutrientId === 'B') {
      impacts.push({
        level: 'high',
        msg: 'K Antagonism: K drives fast growth, diluting Boron levels.'
      });
    }
  } else if (soil.cation === 'hi_na') {
    if (['K', 'Ca'].includes(nutrientId)) {
      impacts.push({
        level: 'high',
        msg: 'Salt Comp: Sodium competes with Potassium/Calcium carrier sites.'
      });
    }
  }
  return impacts;
};
const getSmartRecommendation = inputs => {
  const {
    weather,
    ec,
    stage,
    symptoms,
    crop,
    variety,
    age
  } = inputs;
  const ageNum = parseInt(age) || 5;
  let mix = new Set();
  let rationale = [];
  let rate = "Refer to product label";
  let timing = "Early morning or late evening";
  let compatibility = "Pass";
  let warnings = [];
  if (stage === 'seedling') {
    mix.add("P");
    mix.add("Zn");
    mix.add("Pep");
    rationale.push("🌱 Seedling Base: Phosphorus (P) and Zinc (Zn) are critical for roots. Peptides (Pep) stimulate root mass.");
    rate = "Young Tree Mix: High N, High P | N:P:K ≈ 2:1:1";
  } else if (stage === 'veg') {
    mix.add("N");
    mix.add("Mg");
    mix.add("AA");
    rationale.push("🌿 Vegetative: Nitrogen (N) drives leaf area index, Magnesium (Mg) builds chlorophyll. Amino Acids (AA) improve N efficiency.");
    if (ageNum < 5) {
      rate = "Young Flush: High N (N:K ≈ 3:1) @ 1:1000";
    } else {
      rate = "Mature Maintenance: Balanced (N:K ≈ 1:1) @ 1:800";
    }
  } else if (stage === 'pre_flower') {
    mix.add("P");
    mix.add("K");
    mix.add("Zn");
    mix.add("B");
    mix.add("Mg");
    mix.delete("N");
    rationale.push("🗓️ Pre-Flowering: Accumulate Carbohydrates (C), suppress N. P+K matures branches. Zn+B creates reserves for budding.");
    rationale.push("💡 Pro Tip (1:1 vs MKP): While MKP (0-52-34) is standard, consider adding SOP to reach 1:1 (e.g., 0-40-40). Potassium is the 'brake'—osmotic stress forces stubborn trees to stop flushing.");
    rate = "High P-K Foliar (P:K ≈ 1:1) + Soil Dolomite";
  } else if (stage === 'flower_bud') {
    mix.add("P");
    mix.add("B");
    mix.add("AA");
    rationale.push("👀 Crab Eyes (Bud Emergence): Gentle Phosphorus (P) supplies ATP energy. Boron (B) drives rapid cell division. Amino Acids (AA) reduce environmental stress on tender buds.");
    rate = "Gentle Foliar: High P + Boron @ 1:1000";
  } else if (stage === 'matchstick') {
    mix.add("B");
    mix.add("Ca");
    mix.add("Zn");
    mix.add("AA");
    rationale.push("🔥 Matchstick: Rapid elongation phase. Zinc (Zn) drives auxin production for length, while Calcium (Ca) + Boron (B) build structural integrity to prevent early drop.");
    rate = "Ca+B Combo + Zinc Amino @ 1:800";
  } else if (stage === 'bloom') {
    mix.add("B");
    mix.add("AA");
    mix.delete("N");
    rationale.push("🌸 Full Bloom: Pollination window. Minimize heavy spraying. Boron (B) strictly for pollen tube elongation. Avoid N entirely to prevent shoot competition.");
    rate = "Micro-dose Boron + Amino (Only if necessary)";
    compatibility = "Caution: Avoid harsh pesticides or heavy salts that may burn stigma.";
  } else if (stage === 'fruit_set') {
    mix.add("Ca");
    mix.add("B");
    mix.add("Pep");
    rationale.push("🟢 Early Fruit Set (0–10 DAA): Immediate support after the flower drops. Peptides (Pep) synergize with Ca+B to strengthen the pedicel (stem) attachment. Strict ZERO Nitrogen to avoid competition.");
    rate = "Ca+B + Peptides (Light Application)";
  } else if (stage === 'fruit_drop_1') {
    mix.add("P");
    mix.add("Zn");
    mix.add("Mg");
    rationale.push("🌊 1st Wave: Embryo Culling (10–25 DAA): The 'Quality Check.' The tree naturally sheds fruits with poor embryo development. High P supplies energy while Zn-Amino maintains healthy auxin levels to prevent abscission.");
    rate = "Foliar P + Zn-Amino Mix @ 1:800";
  } else if (stage === 'ping_pong') {
    mix.add("K");
    mix.add("Ca");
    mix.add("Mg");
    mix.add("AA");
    rationale.push("🏓 2nd Wave: Flush Competition (35–50 DAA): The most dangerous phase for Musang King. If the tree flushes new leaves now, it will drop fruit. High Potassium (K) acts as a brake on vegetative growth while Loading sugars into fruit.");
    if (ageNum < 7) {
      mix.add("N");
      rate = "Balanced N:K (1:2) + Ca/Mg Foliar";
      rationale.push("🍎 Young Tree: Add slight N to maintain canopy without causing fruit drop.");
    } else {
      rate = "High K (N:K ≈ 1:3) + Ca/Mg Foliar";
    }
  } else if (stage === 'rapid_expansion') {
    mix.add("K");
    mix.add("Ca");
    mix.add("Mg");
    mix.add("S");
    mix.add("Pep");
    rationale.push("🎈 Rapid Expansion (50–90 DAA): Maximum nutrient draw. K drives size. Ca + Peptides build skin elasticity to prevent cracking. Mg + S begin flavor synthesis.");
    rate = "High K (N:K ≈ 1:4) + Heavy Ca+B Foliar every 10 days";
    if (variety === 'mk') {
      rationale.push("💡 Musang King Special: Boost Ca/Mg ratio to prevent Wet Core and husk burn.");
      rate += " (Extra Ca/Mg)";
    }
  } else if (stage === 'maturation') {
    mix.add("K");
    mix.add("S");
    mix.add("Mg");
    mix.delete("N");
    rationale.push("🟡 Maturation & Natural Split: Final 30 days. Potassium (K) drives final Brix (sugar). Sulfur (S) + Mg build the signature bitter/creamy 'Black Gold' flavor. Zero N to prevent watery flesh.");
    if (crop === 'durian') {
      let daaText = "";
      switch (variety) {
        case 'gp':
          daaText = "Golden Phoenix is an early dropper, around 90–100 DAA.";
          break;
        case 'mk':
          daaText = "Musang King drops around 95–105 DAA.";
          break;
        case 'rp':
          daaText = "Red Prawn drops around 100–105 DAA.";
          break;
        case 'd101':
          daaText = "D101 drops around 100–105 DAA.";
          break;
        case 'tekka':
          daaText = "Tekka drops around 100–105 DAA.";
          break;
        case 'd24':
          daaText = "D24 (Sultan) drops around 105–115 DAA.";
          break;
        case 'tk':
          daaText = "Tupai King drops around 105–110 DAA.";
          break;
        case 'bt':
          daaText = "Black Thorn takes longer to mature, dropping around 110–120 DAA.";
          break;
        case 'ioi':
          daaText = "IOI drops around 110–115 DAA.";
          break;
        case 'mt':
          daaText = "Monthong is a late dropper, taking 120–130 DAA for natural split.";
          break;
        default:
          daaText = "Generic Kampung clones typically drop around 90–110 DAA.";
          break;
      }
      rationale.push(`⏱️ Harvest Window: ${daaText} Stop irrigation 7-14 days before expected drop to maximize dry matter (prevent wet core).`);
    }
    rate = "Soil SOP (Sulfate of Potash) + Foliar MgSO4";
  } else if (stage === 'post_harvest') {
    mix.add("N");
    mix.add("Zn");
    mix.add("Fe");
    mix.add("AA");
    mix.add("Humic");
    rationale.push("🍂 Post-Harvest Recovery: Nitrogen (N) + Micros + Amino (AA) to restore exhausted tree vigor. Humic acid repairs soil structure after heavy harvest traffic.");
    rate = "High N Recovery (N:K ≈ 2:1) + Soil Drench";
  }
  if (weather === 'dry') {
    mix.add("Si");
    mix.add("K");
    mix.add("AA");
    if (mix.has("Ca")) mix.add("B");
    rationale.push("☀️ Hot/Dry: Must add Silicon (Si) and Amino (AA) to reduce transpiration. Drought stops Ca uptake, add foliar Ca.");
    rate = "Amino: 2ml/L | Si: 1ml/L (Stress Shield)";
    timing = "Evening spray (reduce evaporation)";
  } else if (weather === 'wet') {
    mix.add("Mg");
    mix.add("Fe");
    mix.add("AA");
    if (stage !== 'fruit' && stage !== 'pre_flower') mix.add("N");
    rationale.push("🌧️ Rain/Overcast: Replace leached Mg/Fe. Amino Acids help roots survive hypoxia (low oxygen).");
  }
  if (ec === 'high') {
    if (mix.has("K")) {
      mix.delete("K");
      rationale.push("⚠️ High EC Alert: Removed salt-based K fertilizers (KCl/KNO3) to prevent root burn.");
    }
    if (mix.has("N")) {
      mix.delete("N");
      mix.add("AA");
      rationale.push("⚠️ Salinity Strategy: Stop soil N. Use Foliar Amino Acids as safe N source.");
    }
    mix.add("Humic");
    mix.add("Ca");
    rationale.push("🛡️ Buffer: Add Humic to buffer salts, Calcium to displace Sodium.");
  }
  if (symptoms === 'yellow_new') {
    mix.add("Fe");
    mix.add("Mn");
    mix.add("AA");
    rationale.push("🚑 Deficiency: New leaf yellowing indicates Iron/Manganese shortage. Amino helps uptake.");
  } else if (symptoms === 'yellow_old') {
    mix.add("Mg");
    mix.add("N");
    rationale.push("🚑 Deficiency: Old leaf yellowing is typically Mobile elements (N or Mg).");
  } else if (symptoms === 'fruit_crack') {
    mix.add("Ca");
    mix.add("B");
    mix.add("Pep");
    rationale.push("🚑 Cracking Rescue: Severe Calcium deficiency. Must use 'Ca+B+Peptide' trio.");
    rate = "Ca: 3ml/L | B: 1ml/L (Every 5 days)";
  } else if (symptoms === 'wet_core') {
    mix.delete("N");
    mix.add("K");
    mix.add("Ca");
    rationale.push("🚑 Wet Core / Watery Flesh: Excess N or low K/Ca. Stop N immediately. Heavy K/Ca application.");
  } else if (symptoms === 'burn') {
    if (ec === 'high') {
      rationale.push("🔥 Tip Burn: Caused by High Salinity (EC). Flush with water + Humic Acid.");
    } else {
      mix.add("K");
      rationale.push("🔥 Tip Burn: Potential Potassium deficiency. Added K.");
    }
  } else if (symptoms === 'stunted') {
    mix.add("P");
    mix.add("Zn");
    mix.add("AA");
    mix.add("Humic");
    rationale.push("🚑 Stunted: Root stagnation. P + Zn to stimulate roots, Amino for energy, Humic to improve soil.");
  }
  if (mix.has("Ca") && mix.has("P")) {
    warnings.push("⚠️ Ca + P Precipitation Risk: Use Sugar Alcohol Ca or spray separately.");
  }
  if (weather === 'wet' && (mix.has("AA") || mix.has("Pep"))) {
    warnings.push("🚫 Danger: If using Copper fungicide in wet season, DO NOT mix with Amino/Peptides (Severe Burn Risk).");
  }
  if (mix.has("Fe") && mix.has("Ca")) {
    warnings.push("⚠️ Fe/Ca Antagonism: Ca may reduce Fe availability. Use EDDHA-Fe.");
  }
  return {
    mixIds: Array.from(mix),
    rationale,
    rate,
    timing,
    compatibility: warnings.length > 0 ? warnings.join(" | ") : compatibility,
    hasWarning: warnings.length > 0
  };
};

// ==========================================
// 3. SUB-COMPONENTS (DEFINED THIRD)
// ==========================================

const NutrientWheel = ({
  onSelect,
  selectedId,
  inhibitionOffsets,
  onOffsetChange,
  recommendedNutrients,
  mode
}) => {
  const svgRef = useRef(null);
  const [draggingId, setDraggingId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  // NEW: Zoom & Pan State
  const [viewBox, setViewBox] = useState({
    x: 0,
    y: 0,
    w: 800,
    h: 800
  });
  const pointers = useRef(new Map());
  const prevDist = useRef(null);
  const t = key => TRANSLATIONS.en && TRANSLATIONS.en[key] ? TRANSLATIONS.en[key] : key;
  const radius = 240;
  const center = 400;
  const nodes = ['N', 'P', 'K', 'Ca', 'Mg', 'S', 'Si', 'Fe', 'Mn', 'Zn', 'Cu', 'B', 'Mo', 'Cl', 'Ni', 'Na', 'Co', 'AA', 'Pep'];
  const nodePositions = useMemo(() => nodes.map((id, index) => {
    const angle = index / nodes.length * 2 * Math.PI - Math.PI / 2;
    return {
      id,
      angle,
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle)
    };
  }), []);
  const activeId = hoveredId || selectedId;
  const currentNutrient = useMemo(() => activeId ? NUTRIENTS.find(n => n.id === activeId) : null, [activeId]);
  const startNode = useMemo(() => activeId ? nodePositions.find(n => n.id === activeId) : null, [activeId, nodePositions]);

  // Determine if we are in "Advisor Mode" with a valid recipe
  const isAdvisorActive = mode === 'advisor' && recommendedNutrients && recommendedNutrients.length > 0;

  // NEW: Zoom Helper Functions
  const handleWheel = e => {
    e.preventDefault();
    e.stopPropagation();
    const scale = e.deltaY > 0 ? 1.1 : 0.9;
    zoom(scale);
  };
  const zoom = scaleFactor => {
    setViewBox(prev => {
      const newW = prev.w * scaleFactor;
      const newH = prev.h * scaleFactor;

      // Limits
      if (newW > 1600 || newW < 200) return prev;
      const dx = (prev.w - newW) / 2;
      const dy = (prev.h - newH) / 2;
      return {
        x: prev.x + dx,
        y: prev.y + dy,
        w: newW,
        h: newH
      };
    });
  };
  const handlePointerDownCombined = e => {
    pointers.current.set(e.pointerId, {
      x: e.clientX,
      y: e.clientY
    });
    e.target.setPointerCapture(e.pointerId);
  };
  const handlePointerUpCombined = e => {
    pointers.current.delete(e.pointerId);
    e.target.releasePointerCapture(e.pointerId);
    if (pointers.current.size < 2) {
      prevDist.current = null;
    }
    setDraggingId(null);
  };
  const handlePointerMoveCombined = e => {
    if (pointers.current.has(e.pointerId)) {
      pointers.current.set(e.pointerId, {
        x: e.clientX,
        y: e.clientY
      });
    }
    if (draggingId && svgRef.current) {
      e.preventDefault();
      const point = svgRef.current.createSVGPoint();
      point.x = e.clientX;
      point.y = e.clientY;
      const svgP = point.matrixTransform(svgRef.current.getScreenCTM().inverse());
      const dx = svgP.x - 400;
      const dy = svgP.y - 400;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const finalDist = Math.min(Math.max(dist, radius + 80), 750);
      onOffsetChange(prev => ({
        ...prev,
        [draggingId]: finalDist
      }));
      return;
    }
    if (pointers.current.size === 2) {
      const pts = Array.from(pointers.current.values());
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      if (prevDist.current) {
        const scale = prevDist.current / dist;
        const dampenedScale = 1 + (scale - 1) * 1.2;
        zoom(dampenedScale);
      }
      prevDist.current = dist;
    } else if (pointers.current.size === 1 && !draggingId) {
      if (e.movementX !== undefined) {
        const {
          width
        } = e.currentTarget.getBoundingClientRect();
        const scale = viewBox.w / width;
        setViewBox(prev => ({
          ...prev,
          x: prev.x - e.movementX * scale,
          y: prev.y - e.movementY * scale
        }));
      }
    }
  };
  const handlePointerDownNode = (e, linkKey) => {
    e.stopPropagation();
    e.target.setPointerCapture(e.pointerId);
    setDraggingId(linkKey);
  };
  const resetView = () => {
    setViewBox({
      x: 0,
      y: 0,
      w: 800,
      h: 800
    });
  };
  const renderLines = () => {
    if (!currentNutrient || !startNode) return null;
    const createOutwardPath = (endNode, linkKey) => {
      const userDist = inhibitionOffsets && inhibitionOffsets[linkKey] ? inhibitionOffsets[linkKey] : 550;
      const dist = userDist;
      const diff = endNode.angle - startNode.angle;
      let midAngle = startNode.angle + diff / 2;
      if (Math.abs(diff) > Math.PI) midAngle += Math.PI;
      const controlX = center + dist * Math.cos(midAngle);
      const controlY = center + dist * Math.sin(midAngle);
      const startX = center + (radius + 20) * Math.cos(startNode.angle);
      const startY = center + (radius + 20) * Math.sin(startNode.angle);
      const endX = center + (radius + 20) * Math.cos(endNode.angle);
      const endY = center + (radius + 20) * Math.sin(endNode.angle);
      return {
        path: `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`,
        labelX: 0.25 * startX + 0.5 * controlX + 0.25 * endX,
        labelY: 0.25 * startY + 0.5 * controlY + 0.25 * endY
      };
    };
    const allowInteraction = currentNutrient.id === selectedId;
    return /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("marker", {
      id: "arrow-green",
      markerWidth: "10",
      markerHeight: "10",
      refX: "8",
      refY: "5",
      orient: "auto"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M0,0 L0,10 L10,5 z",
      fill: "#059669"
    }))), currentNutrient.antagonism.map(targetId => {
      const endNode = nodePositions.find(n => n.id === targetId);
      if (!endNode) return null;
      return /*#__PURE__*/React.createElement("path", {
        key: `ant-${targetId}`,
        d: `M ${startNode.x} ${startNode.y} Q ${center} ${center} ${endNode.x} ${endNode.y}`,
        fill: "none",
        stroke: "#DC2626",
        strokeWidth: "4"
      });
    }), currentNutrient.inhibition && currentNutrient.inhibition.map(item => {
      const endNode = nodePositions.find(n => n.id === item.el);
      if (!endNode) return null;
      const linkKey = `${currentNutrient.id}-${item.el}`;
      const {
        path,
        labelX,
        labelY
      } = createOutwardPath(endNode, linkKey);
      const isDragging = draggingId === linkKey;
      const displayVal = t(item.val);
      return /*#__PURE__*/React.createElement("g", {
        key: linkKey
      }, /*#__PURE__*/React.createElement("path", {
        d: path,
        fill: "none",
        stroke: "#059669",
        strokeWidth: "4",
        strokeDasharray: "10,10",
        markerEnd: "url(#arrow-green)"
      }), /*#__PURE__*/React.createElement("g", {
        className: allowInteraction ? "cursor-grab active:cursor-grabbing" : "",
        onPointerDown: allowInteraction ? e => handlePointerDownNode(e, linkKey) : undefined
      }, /*#__PURE__*/React.createElement("rect", {
        x: labelX - 45,
        y: labelY - 20,
        width: "90",
        height: "40",
        rx: "12",
        fill: "white",
        stroke: isDragging ? "#059669" : "#F97316",
        strokeWidth: isDragging ? 3 : 2
      }), /*#__PURE__*/React.createElement("text", {
        x: labelX,
        y: labelY + 4,
        textAnchor: "middle",
        className: "text-sm font-bold fill-orange-800 select-none pointer-events-none"
      }, displayVal)));
    }), currentNutrient.synergy?.map(targetId => {
      const endNode = nodePositions.find(n => n.id === targetId);
      if (!endNode) return null;
      return /*#__PURE__*/React.createElement("path", {
        key: `syn-${targetId}`,
        d: `M ${startNode.x} ${startNode.y} Q ${center} ${center} ${endNode.x} ${endNode.y}`,
        fill: "none",
        stroke: "#10B981",
        strokeWidth: "4",
        className: "opacity-60"
      });
    }));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center py-4 w-full h-full max-h-[600px] aspect-square relative group"
  }, /*#__PURE__*/React.createElement("svg", {
    ref: svgRef,
    viewBox: `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`,
    className: "w-full h-full pointer-events-auto overflow-visible touch-none cursor-move bg-stone-50/20 rounded-full",
    onPointerDown: handlePointerDownCombined,
    onPointerMove: handlePointerMoveCombined,
    onPointerUp: handlePointerUpCombined,
    onPointerCancel: handlePointerUpCombined,
    onPointerLeave: handlePointerUpCombined,
    onWheel: handleWheel
  }, isAdvisorActive && /*#__PURE__*/React.createElement("g", {
    className: "animate-in fade-in zoom-in duration-500"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: center,
    cy: center,
    r: 60,
    fill: "#ecfdf5",
    stroke: "#10b981",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("text", {
    x: center,
    y: center + 8,
    textAnchor: "middle",
    className: "text-xl font-black fill-emerald-700 tracking-widest"
  }, t('lbl_recipe_center'))), !isAdvisorActive && /*#__PURE__*/React.createElement("circle", {
    cx: center,
    cy: center,
    r: radius,
    stroke: "#e2e8f0",
    strokeWidth: "4",
    fill: "none"
  }), renderLines(), nodePositions.map(node => {
    const isSelected = activeId === node.id;
    const isRecommended = recommendedNutrients?.includes(node.id) || node.id === 'AA' && recommendedNutrients?.includes('AA') || node.id === 'Pep' && recommendedNutrients?.includes('Pep');
    const isAntag = currentNutrient?.antagonism.includes(node.id);
    const inhibitionData = currentNutrient?.inhibition?.find(i => i.el === node.id);
    const isInhib = !!inhibitionData;
    const isSyn = currentNutrient?.synergy?.includes(node.id);
    const isDimmed = isAdvisorActive && !isRecommended && !isSelected;
    let displayLabel = node.id;
    let fillColor = "white";
    let strokeColor = "#d6d3d1";
    let textColor = "#1c1917";
    let opacity = isDimmed ? 0.2 : 1;
    let scale = isDimmed ? 0.8 : 1;
    if (isSelected) {
      fillColor = "#1c1917";
      strokeColor = "#1c1917";
      textColor = "white";
      scale = 1.1;
      opacity = 1;
    } else if (isInhib) {
      fillColor = "#f97316";
      strokeColor = "#ea580c";
      textColor = "white";
    } else if (isAntag) {
      fillColor = "#dc2626";
      strokeColor = "#b91c1c";
      textColor = "white";
    } else if (isSyn) {
      fillColor = "#059669";
      strokeColor = "#047857";
      textColor = "white";
    } else if (isRecommended) {
      fillColor = "#fef3c7";
      strokeColor = "#d97706";
      textColor = "#92400e";
      scale = 1.2;
    }
    let fontSizeClass = isSelected ? 'text-6xl' : 'text-3xl';
    if (!isSelected && node.id === 'Pep') {
      fontSizeClass = 'text-2xl';
    }
    return /*#__PURE__*/React.createElement("g", {
      key: node.id,
      onClick: () => onSelect(NUTRIENTS.find(n => n.id === node.id)),
      onMouseEnter: () => setHoveredId(node.id),
      onMouseLeave: () => setHoveredId(null),
      className: "cursor-pointer transition-all duration-500 ease-out",
      style: {
        transformBox: 'fill-box',
        transformOrigin: 'center',
        transform: `scale(${scale})`,
        opacity: opacity
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: node.x,
      cy: node.y,
      r: isSelected ? 50 : 32,
      fill: fillColor,
      stroke: strokeColor,
      strokeWidth: isSelected || isRecommended ? 7 : 3,
      className: `transition-all duration-300 shadow-xl ${isRecommended && !isSelected ? 'animate-pulse' : ''}`
    }), /*#__PURE__*/React.createElement("text", {
      x: node.x,
      y: node.y + (isSelected ? 18 : 10),
      textAnchor: "middle",
      className: `font-bold select-none pointer-events-none transition-all duration-300 ${fontSizeClass}`,
      fill: textColor
    }, displayLabel));
  })), (viewBox.w !== 800 || viewBox.x !== 0 || viewBox.y !== 0) && /*#__PURE__*/React.createElement("button", {
    onClick: resetView,
    className: "absolute bottom-4 right-4 bg-white/90 backdrop-blur shadow-lg border border-stone-200 p-2 rounded-full text-stone-600 hover:text-stone-900 transition-all animate-in zoom-in",
    title: "Reset Zoom"
  }, /*#__PURE__*/React.createElement(RotateCcw, {
    size: 20
  })));
};
const PHChart = () => {
  const [hoverPH, setHoverPH] = useState(6.5);
  const [selectedEl, setSelectedEl] = useState(null);
  const containerRef = useRef(null);
  const [isDraggingLine, setIsDraggingLine] = useState(false);
  const t = key => TRANSLATIONS.en && TRANSLATIONS.en[key] ? TRANSLATIONS.en[key] : key;
  const rowHeight = 45;
  const topPadding = 50;
  const bottomPadding = 30;
  const chartHeight = topPadding + PH_AVAILABILITY_DATA.length * rowHeight + bottomPadding;
  const updatePH = clientX => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    let newPH = 4.0 + x / width * 5.0;
    newPH = Math.max(4.0, Math.min(9.0, newPH));
    setHoverPH(parseFloat(newPH.toFixed(1)));
  };
  const handleLineDown = e => {
    e.stopPropagation();
    e.preventDefault();
    setIsDraggingLine(true);
    e.target.setPointerCapture(e.pointerId);
  };
  const handleLineMove = e => {
    if (!isDraggingLine) return;
    e.stopPropagation();
    e.preventDefault();
    updatePH(e.clientX);
  };
  const handleLineUp = e => {
    setIsDraggingLine(false);
    e.target.releasePointerCapture(e.pointerId);
  };
  const handleElClick = id => {
    setSelectedEl(selectedEl === id ? null : id);
  };
  const activeElementData = selectedEl ? PH_AVAILABILITY_DATA.find(e => e.id === selectedEl) : null;
  const getAvailabilityStatus = (el, currentPH) => {
    const points = el.points;
    let availability = 0;
    for (let i = 0; i < points.length - 1; i++) {
      const p1 = points[i];
      const p2 = points[i + 1];
      if (currentPH >= p1[0] && currentPH <= p2[0]) {
        const t = (currentPH - p1[0]) / (p2[0] - p1[0]);
        availability = p1[1] + t * (p2[1] - p1[1]);
        break;
      }
    }
    availability = Math.max(0, Math.min(1, availability));
    if (availability > 0.8) return {
      label: "ph_optimal",
      color: "text-emerald-600",
      bg: "bg-emerald-100",
      value: availability
    };
    if (availability > 0.4) return {
      label: "ph_sufficient",
      color: "text-indigo-600",
      bg: "bg-indigo-100",
      value: availability
    };
    return {
      label: "ph_limited",
      color: "text-red-600",
      bg: "bg-red-100",
      value: availability
    };
  };
  const tip = useMemo(() => {
    if (hoverPH >= 6.0 && hoverPH <= 6.5) {
      return {
        title: t('ph_tip_optimal_title'),
        desc: t('ph_tip_optimal_desc'),
        bg: "bg-emerald-50 border-emerald-200",
        text: "text-emerald-800",
        icon: CheckCircle,
        iconColor: "text-emerald-600"
      };
    }
    const limited = PH_AVAILABILITY_DATA.filter(el => getAvailabilityStatus(el, hoverPH).label === 'ph_limited').map(e => {
      const fullLabel = t('elem_' + e.name);
      return fullLabel.includes(' (') ? fullLabel.split(' (')[0] : fullLabel;
    });
    if (hoverPH < 6.0) {
      const listStr = limited.length > 0 ? limited.slice(0, 3).join(', ') + ' ' + t('ph_others') : t('ph_macros');
      return {
        title: t('ph_tip_acidic_title'),
        desc: t('ph_tip_acidic_desc').replace('{val}', hoverPH).replace('{list}', listStr),
        bg: "bg-orange-50 border-orange-200",
        text: "text-orange-800",
        icon: AlertTriangle,
        iconColor: "text-orange-600"
      };
    } else {
      const listStr = limited.length > 0 ? limited.slice(0, 3).join(', ') + ' ' + t('ph_others') : "Micronutrients";
      return {
        title: t('ph_tip_alkaline_title'),
        desc: t('ph_tip_alkaline_desc').replace('{val}', hoverPH).replace('{list}', listStr),
        bg: "bg-blue-50 border-blue-200",
        text: "text-blue-800",
        icon: Info,
        iconColor: "text-blue-600"
      };
    }
  }, [hoverPH]);
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 md:p-10 rounded-[2.5rem] border-2 border-stone-300 shadow-sm animate-slide-up print:hidden relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-indigo-100 text-indigo-600 rounded-xl"
  }, /*#__PURE__*/React.createElement(FlaskConical, {
    size: 24
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-black text-stone-900 tracking-widest"
  }, t('ph_chart_title')), /*#__PURE__*/React.createElement("p", {
    className: "text-indigo-600 font-bold opacity-80"
  }, t('ph_chart_desc')))), /*#__PURE__*/React.createElement("div", {
    className: `mb-6 flex gap-4 p-4 border rounded-xl items-start transition-colors duration-300 min-h-[110px] ${tip.bg}`
  }, /*#__PURE__*/React.createElement(tip.icon, {
    className: `${tip.iconColor} shrink-0 mt-0.5`,
    size: 20
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: `font-bold ${tip.text} text-sm tracking-wide`
  }, tip.title), /*#__PURE__*/React.createElement("p", {
    className: `${tip.text} text-sm mt-1 font-medium leading-relaxed opacity-90`
  }, tip.desc))), /*#__PURE__*/React.createElement("div", {
    className: "relative border-2 border-stone-200 rounded-xl bg-stone-50 touch-pan-y",
    ref: containerRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-full",
    style: {
      height: `${chartHeight}px`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 grid grid-cols-10 pointer-events-none opacity-20"
  }, [...Array(10)].map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "border-r border-stone-400 h-full"
  }))), /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 1000 ${chartHeight}`,
    className: "w-full h-full absolute inset-0 z-10",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("g", {
    className: "text-xs font-bold fill-stone-400"
  }, [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9].map((val, i) => {
    const x = (val - 4) / 5 * 1000;
    return /*#__PURE__*/React.createElement("text", {
      key: val,
      x: x,
      y: "20",
      textAnchor: "middle"
    }, val);
  })), PH_AVAILABILITY_DATA.map((el, idx) => {
    const isSelected = selectedEl === el.id;
    const isDimmed = selectedEl && !isSelected;
    const rowY = topPadding + idx * rowHeight;
    const reversedPoints = [...el.points].reverse();
    let d = `M ${(el.points[0][0] - 4) / 5 * 1000} ${rowY} `;
    el.points.forEach(pt => {
      const x = (pt[0] - 4) / 5 * 1000;
      const y = rowY - pt[1] * 16;
      d += `L ${x} ${y} `;
    });
    reversedPoints.forEach(pt => {
      const x = (pt[0] - 4) / 5 * 1000;
      const y = rowY + pt[1] * 16;
      d += `L ${x} ${y} `;
    });
    d += "Z";
    return /*#__PURE__*/React.createElement("g", {
      key: el.id,
      onClick: e => {
        e.stopPropagation();
        handleElClick(el.id);
      },
      className: "cursor-pointer transition-all duration-300",
      style: {
        opacity: isDimmed ? 0.2 : 1
      }
    }, /*#__PURE__*/React.createElement("rect", {
      x: "0",
      y: rowY - 20,
      width: "1000",
      height: "40",
      fill: "transparent"
    }), /*#__PURE__*/React.createElement("path", {
      d: d,
      fill: el.color,
      className: `transition-opacity duration-300 ${isSelected ? 'opacity-100 drop-shadow-md' : 'opacity-80 hover:opacity-100'}`
    }), /*#__PURE__*/React.createElement("text", {
      x: "15",
      y: rowY + 5,
      className: "text-xs font-black uppercase pointer-events-none select-none",
      style: {
        fontSize: isSelected ? '22px' : '13px',
        fill: '#0c0a09',
        stroke: 'rgba(255,255,255,0.85)',
        strokeWidth: '4px',
        paintOrder: 'stroke',
        transition: 'font-size 0.2s ease-out'
      }
    }, t('elem_' + el.name)));
  })), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 bottom-0 w-16 -ml-8 z-20 cursor-ew-resize group touch-none flex flex-col items-center",
    style: {
      left: `${(hoverPH - 4) / 5 * 100}%`
    },
    onPointerDown: handleLineDown,
    onPointerMove: handleLineMove,
    onPointerUp: handleLineUp,
    onPointerCancel: handleLineUp
  }, /*#__PURE__*/React.createElement("div", {
    className: `sticky top-4 mt-8 bg-white text-red-600 text-sm font-black px-3 py-1.5 rounded-lg shadow-xl border-2 border-red-600 flex items-center justify-center gap-1 transition-transform select-none ${isDraggingLine ? 'scale-110' : 'group-hover:scale-105'}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "opacity-75 text-[10px] font-bold"
  }, "pH"), hoverPH), /*#__PURE__*/React.createElement("div", {
    className: `absolute top-0 bottom-0 border-l-2 border-dashed border-red-600/50 transition-opacity pointer-events-none -z-10 ${isDraggingLine ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`
  })))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mt-10 mb-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-indigo-100 text-indigo-600 rounded-xl"
  }, /*#__PURE__*/React.createElement(BarChart3, {
    size: 24
  })), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-black text-stone-900 uppercase tracking-widest"
  }, t('ph_breakdown_title'))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-6"
  }, ['Macro', 'Secondary', 'Micro', 'Beneficial', 'Biostimulant'].map(category => {
    const categoryElements = PH_AVAILABILITY_DATA.filter(p => {
      const n = NUTRIENTS.find(nut => nut.id === p.id);
      return n && n.type === category;
    });
    if (categoryElements.length === 0) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: category,
      className: "bg-stone-50 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between items-center px-5 py-4 border-b border-stone-200 bg-stone-100/50"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-black text-sm text-stone-400 uppercase tracking-widest"
    }, t('cat_' + category)), /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] font-black text-red-600 bg-white px-2 py-1 rounded border border-red-100 shadow-sm"
    }, "pH ", hoverPH)), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col divide-y divide-stone-100"
    }, categoryElements.map(el => {
      const status = getAvailabilityStatus(el, hoverPH);
      const percent = Math.round(status.value * 100);
      const isSelected = selectedEl === el.id;
      const isDimmed = selectedEl && !isSelected;
      let d = "";
      const height = 30;
      let startX = (el.points[0][0] - 4) / 5 * 100;
      let startY = height - el.points[0][1] * height;
      d += `M ${startX} ${height} L ${startX} ${startY} `;
      el.points.forEach(pt => {
        const x = (pt[0] - 4) / 5 * 100;
        const y = height - pt[1] * height;
        d += `L ${x} ${y} `;
      });
      const lastPt = el.points[el.points.length - 1];
      let endX = (lastPt[0] - 4) / 5 * 100;
      d += `L ${endX} ${height} Z`;
      const meta = ION_META[el.id] || {
        form: el.id,
        leach_desc: "-",
        grip_desc: "-",
        compete: "-"
      };
      return /*#__PURE__*/React.createElement("div", {
        key: el.id,
        onClick: () => handleElClick(el.id),
        className: `relative transition-all duration-200 ${isSelected ? 'bg-white z-10' : 'bg-transparent hover:bg-stone-50'}`,
        style: {
          opacity: isDimmed ? 0.4 : 1
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: `absolute top-0 bottom-0 border-l-2 border-dashed border-red-600/40 pointer-events-none z-0 transition-opacity duration-75 ${isDraggingLine ? 'opacity-100' : 'opacity-40'}`,
        style: {
          left: `${(hoverPH - 4) / 5 * 100}%`
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: "relative z-10 px-5 pt-4 pb-2"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex justify-between items-center mb-1.5"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2"
      }, /*#__PURE__*/React.createElement("div", {
        className: `w-3 h-3 rounded-full shadow-sm ring-1 ring-black/5 transition-transform ${isSelected ? 'scale-125' : ''}`,
        style: {
          backgroundColor: el.color
        }
      }), /*#__PURE__*/React.createElement("span", {
        className: "font-bold text-sm transition-colors",
        style: {
          color: isSelected ? 'black' : el.color
        }
      }, t('elem_' + el.name))), /*#__PURE__*/React.createElement("span", {
        className: "font-black text-[10px] px-2 py-0.5 rounded-md border transition-all",
        style: {
          backgroundColor: `${el.color}15`,
          color: el.color,
          borderColor: `${el.color}40`,
          transform: isSelected ? 'scale(1.1)' : 'scale(1)'
        }
      }, percent, "%")), isSelected && /*#__PURE__*/React.createElement("div", {
        className: "mb-4 mt-3 animate-in slide-in-from-top-2 fade-in duration-200"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex justify-between items-center p-4 bg-stone-50 rounded-t-xl border-t-2 border-x-2 border-stone-200"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
        className: "text-[11px] font-black uppercase tracking-widest text-stone-500 block mb-1"
      }, t('lbl_ionic_form')), /*#__PURE__*/React.createElement("span", {
        className: "text-3xl font-black text-stone-900 tracking-wider"
      }, meta.form)), /*#__PURE__*/React.createElement("div", {
        className: "w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-black shadow-md",
        style: {
          backgroundColor: el.color
        }
      }, el.id)), /*#__PURE__*/React.createElement("div", {
        className: "flex flex-col md:grid md:grid-cols-3 gap-0.5 bg-stone-200 border-2 border-stone-200 rounded-b-xl overflow-hidden shadow-sm"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bg-white p-3 flex flex-row md:flex-col justify-between md:justify-center items-center text-center gap-1.5"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-[11px] font-black text-stone-900 uppercase tracking-tight flex items-center gap-2 md:gap-1.5"
      }, /*#__PURE__*/React.createElement("div", {
        className: "p-1.5 bg-blue-50 rounded-lg text-blue-600 shrink-0 md:bg-transparent md:p-0"
      }, /*#__PURE__*/React.createElement(CloudRain, {
        size: 14
      })), t('lbl_leach_risk')), /*#__PURE__*/React.createElement("span", {
        className: `text-sm md:text-base font-black leading-tight text-right md:text-center ${meta.leach_desc.includes('High') ? 'text-red-600' : 'text-stone-900'}`
      }, meta.leach_desc)), /*#__PURE__*/React.createElement("div", {
        className: "bg-white p-3 flex flex-row md:flex-col justify-between md:justify-center items-center text-center gap-1.5"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-[11px] font-black text-stone-900 uppercase tracking-tight flex items-center gap-2 md:gap-1.5"
      }, /*#__PURE__*/React.createElement("div", {
        className: "p-1.5 bg-stone-100 rounded-lg text-stone-600 shrink-0 md:bg-transparent md:p-0"
      }, /*#__PURE__*/React.createElement(Layers, {
        size: 14
      })), t('lbl_soil_grip')), /*#__PURE__*/React.createElement("span", {
        className: "text-sm md:text-base font-black text-stone-900 leading-tight text-right md:text-center"
      }, meta.grip_desc)), /*#__PURE__*/React.createElement("div", {
        className: "bg-white p-3 flex flex-row md:flex-col justify-between md:justify-center items-center text-center gap-1.5"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-[11px] font-black text-stone-900 uppercase tracking-tight flex items-center gap-2 md:gap-1.5"
      }, /*#__PURE__*/React.createElement("div", {
        className: "p-1.5 bg-amber-50 rounded-lg text-amber-600 shrink-0 md:bg-transparent md:p-0"
      }, /*#__PURE__*/React.createElement(Zap, {
        size: 14
      })), t('lbl_compete')), /*#__PURE__*/React.createElement("span", {
        className: "text-sm md:text-base font-black text-stone-900 leading-tight text-right md:text-center max-w-[60%] md:max-w-full"
      }, meta.compete === 'None' ? t('lbl_none') : meta.compete))))), /*#__PURE__*/React.createElement("div", {
        className: "h-8 w-full bg-stone-100 relative border-t border-stone-200 z-10"
      }, /*#__PURE__*/React.createElement("svg", {
        viewBox: "0 0 100 30",
        preserveAspectRatio: "none",
        className: "w-full h-full absolute inset-0"
      }, /*#__PURE__*/React.createElement("path", {
        d: d,
        fill: el.color,
        fillOpacity: "0.9",
        stroke: "none"
      })), /*#__PURE__*/React.createElement("span", {
        className: "absolute bottom-0 left-1 text-[8px] font-bold text-stone-400 leading-none pointer-events-none"
      }, "4"), /*#__PURE__*/React.createElement("span", {
        className: "absolute bottom-0 right-1 text-[8px] font-bold text-stone-400 leading-none pointer-events-none"
      }, "9")));
    })));
  })));
};
const MixRulesPanel = () => {
  const t = key => TRANSLATIONS.en && TRANSLATIONS.en[key] ? TRANSLATIONS.en[key] : key;
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 md:p-10 rounded-[2.5rem] border-2 border-stone-300 shadow-sm animate-slide-up space-y-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-red-100 text-red-600 rounded-xl"
  }, /*#__PURE__*/React.createElement(AlertTriangle, {
    size: 24
  })), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-black text-stone-900 uppercase tracking-widest"
  }, t('mix_rules'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-red-50 rounded-[2rem] border-2 border-red-100 overflow-hidden relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 p-8 opacity-5 pointer-events-none"
  }, /*#__PURE__*/React.createElement(Beaker, {
    size: 200,
    className: "text-red-900"
  })), /*#__PURE__*/React.createElement("div", {
    className: "p-8 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-4"
  }, /*#__PURE__*/React.createElement(AlertTriangle, {
    className: "text-red-600",
    size: 28
  }), /*#__PURE__*/React.createElement("h4", {
    className: "font-black text-xl text-red-900 uppercase tracking-widest"
  }, t('mix_protocol_gold'))), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-lg text-red-800/80 leading-relaxed mb-8"
  }, t('mix_protocol_gold_desc')), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-5 md:p-6 rounded-2xl border-2 border-red-100 shadow-sm flex items-center gap-5 text-left transition-transform hover:scale-[1.01]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-sky-100 text-sky-600 rounded-xl shrink-0"
  }, /*#__PURE__*/React.createElement(Wind, {
    size: 28
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "font-black text-lg md:text-xl text-stone-900 uppercase tracking-wide"
  }, t('mix_protocol_step1')), /*#__PURE__*/React.createElement("p", {
    className: "text-base md:text-lg font-bold text-stone-500 mt-1 leading-relaxed"
  }, t('mix_protocol_step1_desc')))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-5 md:p-6 rounded-2xl border-2 border-red-100 shadow-sm flex items-center gap-5 text-left transition-transform hover:scale-[1.01]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-amber-100 text-amber-600 rounded-xl shrink-0"
  }, /*#__PURE__*/React.createElement(Beaker, {
    size: 28
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "font-black text-lg md:text-xl text-stone-900 uppercase tracking-wide"
  }, t('mix_protocol_step2')), /*#__PURE__*/React.createElement("p", {
    className: "text-base md:text-lg font-bold text-stone-500 mt-1 leading-relaxed"
  }, t('mix_protocol_step2_desc')))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-5 md:p-6 rounded-2xl border-2 border-red-100 shadow-sm flex items-center gap-5 text-left transition-transform hover:scale-[1.01]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-emerald-100 text-emerald-600 rounded-xl shrink-0"
  }, /*#__PURE__*/React.createElement(CheckCircle, {
    size: 28
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "font-black text-lg md:text-xl text-stone-900 uppercase tracking-wide"
  }, t('mix_protocol_step3')), /*#__PURE__*/React.createElement("p", {
    className: "text-base md:text-lg font-bold text-stone-500 mt-1 leading-relaxed"
  }, t('mix_protocol_step3_desc'))))))), MIX_RULES.map((rule, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "p-6 md:p-8 bg-stone-50 rounded-[2rem] border-2 border-stone-200 flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center transition-all hover:scale-[1.01] hover:shadow-lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: `p-4 rounded-2xl ${rule.status === 'status_incompatible' ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-600'}`
  }, /*#__PURE__*/React.createElement(AlertTriangle, {
    size: 32
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-black text-2xl text-stone-900 mb-2"
  }, t(rule.a), " + ", t(rule.b)), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-stone-500 text-xl"
  }, t(rule.reason)))))), /*#__PURE__*/React.createElement("div", {
    className: "relative overflow-hidden rounded-[2.5rem] border-2 border-violet-100 bg-violet-50/50 p-6 md:p-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 p-12 opacity-5 pointer-events-none"
  }, /*#__PURE__*/React.createElement(Scale, {
    size: 200,
    className: "text-violet-900"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row items-start md:items-center gap-3 mb-8 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-violet-600 text-white rounded-xl shadow-lg"
  }, /*#__PURE__*/React.createElement(Scale, {
    size: 24
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-black text-stone-900 uppercase tracking-widest"
  }, t('unit_title')), /*#__PURE__*/React.createElement("p", {
    className: "text-violet-600 font-bold opacity-80"
  }, t('unit_desc')))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-[2rem] border-2 border-violet-100 shadow-sm overflow-hidden relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "divide-y divide-violet-100"
  }, [{
    unit: 'unit_row_ratio',
    targets: 'unit_ratio_targets',
    reason: 'unit_ratio_reason'
  }, {
    unit: 'unit_row_percent',
    targets: 'unit_percent_targets',
    reason: 'unit_percent_reason'
  }, {
    unit: 'unit_row_ppm',
    targets: 'unit_ppm_targets',
    reason: 'unit_ppm_reason'
  }].map((item, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "p-6 md:p-8 flex flex-col gap-6 hover:bg-violet-50/30 transition-colors"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-violet-100 text-violet-700 px-4 py-2 rounded-xl text-2xl font-black min-w-[3.5rem] text-center"
  }, t(item.unit))), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-black uppercase tracking-widest text-violet-400 block mb-2"
  }, t('unit_col_target')), /*#__PURE__*/React.createElement("p", {
    className: "text-xl font-bold text-stone-700 leading-snug"
  }, t(item.targets))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-black uppercase tracking-widest text-violet-400 block mb-2"
  }, t('unit_col_reason')), /*#__PURE__*/React.createElement("p", {
    className: "text-lg font-bold text-stone-500 leading-relaxed"
  }, t(item.reason))))))))), /*#__PURE__*/React.createElement("div", {
    className: "relative overflow-hidden rounded-[2.5rem] border-2 border-indigo-100 bg-indigo-50/50 p-6 md:p-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 p-12 opacity-5 pointer-events-none"
  }, /*#__PURE__*/React.createElement(Atom, {
    size: 200,
    className: "text-indigo-900"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row items-start md:items-center gap-3 mb-8 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-indigo-600 text-white rounded-xl shadow-lg"
  }, /*#__PURE__*/React.createElement(Atom, {
    size: 24
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-black text-stone-900 uppercase tracking-widest"
  }, t('chel_title')), /*#__PURE__*/React.createElement("p", {
    className: "text-indigo-600 font-bold opacity-80"
  }, t('chel_subtitle')))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 gap-6 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-base font-black uppercase tracking-[0.2em] text-indigo-400 block ml-2 mb-2"
  }, t('chel_lbl_synthetic')), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 md:p-8 rounded-[2rem] border-2 border-indigo-100 shadow-sm transition-transform hover:scale-[1.01]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-start md:items-center mb-4 flex-col md:flex-row gap-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-black text-2xl text-stone-900"
  }, t('chel_edta')), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-black bg-stone-100 px-4 py-2 rounded-xl text-stone-500 border border-stone-200 whitespace-nowrap"
  }, t('chel_badge_ph_low'))), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xl text-stone-500 leading-relaxed"
  }, t('chel_edta_desc'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 md:p-8 rounded-[2rem] border-2 border-indigo-100 shadow-md transition-transform hover:scale-[1.01]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-start md:items-center mb-4 flex-col md:flex-row gap-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-black text-2xl text-indigo-800"
  }, t('chel_deta')), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-black bg-indigo-50 px-4 py-2 rounded-xl text-indigo-500 border border-indigo-100 whitespace-nowrap"
  }, t('chel_badge_ph_med'))), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xl text-stone-600 leading-relaxed"
  }, t('chel_deta_desc'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 md:p-8 rounded-[2rem] border-2 border-amber-100 shadow-md transition-transform hover:scale-[1.01]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-start md:items-center mb-4 flex-col md:flex-row gap-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-black text-2xl text-amber-600"
  }, t('chel_dtpa')), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-black bg-amber-50 px-4 py-2 rounded-xl text-amber-600 border border-amber-100 whitespace-nowrap"
  }, t('chel_badge_ph_med'))), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xl text-stone-600 leading-relaxed"
  }, t('chel_dtpa_desc'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 md:p-8 rounded-[2rem] border-2 border-indigo-200 shadow-md transition-transform hover:scale-[1.01]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-start md:items-center mb-4 flex-col md:flex-row gap-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-black text-2xl text-indigo-900"
  }, t('chel_eddha')), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-black bg-indigo-100 px-4 py-2 rounded-xl text-indigo-600 border border-indigo-200 whitespace-nowrap"
  }, t('chel_badge_ph_wide'))), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xl text-stone-600 leading-relaxed"
  }, t('chel_eddha_desc')))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 mt-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-base font-black uppercase tracking-[0.2em] text-emerald-600 block ml-2 mb-2"
  }, t('chel_lbl_organic')), /*#__PURE__*/React.createElement("div", {
    className: "bg-emerald-50 p-6 md:p-8 rounded-[2rem] border-2 border-emerald-100 shadow-sm transition-transform hover:scale-[1.01]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-start md:items-center mb-4 flex-col md:flex-row gap-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-black text-2xl text-emerald-900"
  }, t('chel_amino')), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-black bg-emerald-200/50 px-4 py-2 rounded-xl text-emerald-800 border border-emerald-200/50 whitespace-nowrap"
  }, t('chel_badge_fast'))), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xl text-stone-600 leading-relaxed"
  }, t('chel_amino_desc'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-sky-50 p-6 md:p-8 rounded-[2rem] border-2 border-sky-100 shadow-sm transition-transform hover:scale-[1.01]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center mb-4"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-black text-2xl text-sky-900"
  }, t('chel_polyol')), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-black bg-sky-200/50 px-4 py-2 rounded-xl text-sky-800 border border-sky-200/50 whitespace-nowrap"
  }, t('chel_badge_fast'))), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xl text-stone-600 leading-relaxed"
  }, t('chel_polyol_desc'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-amber-50 p-6 md:p-8 rounded-[2rem] border-2 border-amber-100 shadow-sm transition-transform hover:scale-[1.01]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-start md:items-center mb-4 flex-col md:flex-row gap-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-black text-2xl text-amber-900"
  }, t('chel_fulvic')), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-black bg-amber-200/50 px-4 py-2 rounded-xl text-amber-800 border border-amber-200/50 whitespace-nowrap"
  }, t('chel_badge_univ'))), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xl text-stone-600 leading-relaxed"
  }, t('chel_fulvic_desc'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-stone-50 p-6 md:p-8 rounded-[2rem] border-2 border-stone-200 shadow-sm transition-transform hover:scale-[1.01]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-start md:items-center mb-4 flex-col md:flex-row gap-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-black text-2xl text-stone-800"
  }, t('chel_ligno')), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-black bg-stone-200/50 px-4 py-2 rounded-xl text-stone-600 border border-stone-300/50 whitespace-nowrap"
  }, t('chel_badge_univ'))), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xl text-stone-600 leading-relaxed"
  }, t('chel_ligno_desc'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-stone-100/50 p-6 md:p-8 rounded-[2rem] border-2 border-stone-200 shadow-sm transition-transform hover:scale-[1.01]"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-black text-2xl text-stone-700 mb-3"
  }, t('chel_wood_vinegar')), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xl text-stone-500"
  }, t('chel_wood_vinegar_desc')))))), /*#__PURE__*/React.createElement("div", {
    className: "relative overflow-hidden rounded-[2.5rem] border-2 border-sky-100 bg-sky-50/50 p-6 md:p-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 p-12 opacity-5 pointer-events-none"
  }, /*#__PURE__*/React.createElement(Droplets, {
    size: 200,
    className: "text-sky-900"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row items-start md:items-center gap-3 mb-8 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-sky-500 text-white rounded-xl shadow-lg"
  }, /*#__PURE__*/React.createElement(Droplets, {
    size: 24
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-black text-stone-900 uppercase tracking-widest"
  }, t('adj_title')), /*#__PURE__*/React.createElement("p", {
    className: "text-sky-600 font-bold opacity-80"
  }, t('adj_subtitle')))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-6 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 md:p-8 rounded-[2rem] border-2 border-sky-100 shadow-sm transition-transform hover:scale-[1.01] flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-center mb-3"
  }, /*#__PURE__*/React.createElement(ShieldCheck, {
    className: "text-emerald-500",
    size: 28
  }), /*#__PURE__*/React.createElement("h4", {
    className: "font-black text-2xl text-stone-900"
  }, t('adj_nis_title'))), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xl text-stone-500 leading-relaxed"
  }, t('adj_nis_desc')))), /*#__PURE__*/React.createElement("div", {
    className: "bg-sky-50 p-6 md:p-8 rounded-[2rem] border-2 border-sky-200 shadow-sm transition-transform hover:scale-[1.01] flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-center mb-3"
  }, /*#__PURE__*/React.createElement(Zap, {
    className: "text-sky-600",
    size: 28
  }), /*#__PURE__*/React.createElement("h4", {
    className: "font-black text-2xl text-stone-900"
  }, t('adj_si_title'))), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xl text-stone-600 leading-relaxed"
  }, t('adj_si_desc'))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 bg-orange-50 p-6 md:p-8 rounded-[2rem] border-2 border-orange-200 shadow-sm transition-transform hover:scale-[1.01] relative z-10"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-center mb-3"
  }, /*#__PURE__*/React.createElement(Flower2, {
    className: "text-orange-600",
    size: 28
  }), /*#__PURE__*/React.createElement("h4", {
    className: "font-black text-2xl text-orange-900"
  }, t('adj_orange_title'))), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xl text-stone-600 leading-relaxed mb-4"
  }, t('adj_orange_desc')), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xl text-orange-800 p-4 bg-orange-100/50 rounded-xl border border-orange-200/50 mb-6 leading-relaxed"
  }, t('adj_orange_warn')), /*#__PURE__*/React.createElement("div", {
    className: "bg-yellow-50 rounded-xl p-5 border-l-8 border-yellow-400 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3 items-center mb-3"
  }, /*#__PURE__*/React.createElement(AlertTriangle, {
    className: "text-yellow-600",
    size: 28
  }), /*#__PURE__*/React.createElement("h5", {
    className: "font-black text-2xl text-yellow-900 uppercase tracking-wide"
  }, t('adj_bee_title'))), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xl text-yellow-800 leading-relaxed whitespace-pre-line"
  }, t('adj_bee_desc'))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 bg-stone-900/5 p-6 md:p-8 rounded-[2rem] border-2 border-stone-200 shadow-sm transition-transform hover:scale-[1.01] relative z-10"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3 items-center mb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-2 bg-stone-800 rounded-xl text-white"
  }, /*#__PURE__*/React.createElement(Skull, {
    size: 24
  })), /*#__PURE__*/React.createElement("h4", {
    className: "font-black text-2xl text-stone-900"
  }, t('adj_diy_title'))), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xl text-stone-600 leading-relaxed",
    dangerouslySetInnerHTML: {
      __html: t('adj_diy_desc')
    }
  })))));
};
const SmartAdvisorPanel = ({
  advisorState,
  setAdvisorState
}) => {
  const t = k => TRANSLATIONS.en && TRANSLATIONS.en[k] ? TRANSLATIONS.en[k] : k;
  const [draftState, setDraftState] = useState(advisorState);
  useEffect(() => {
    if (advisorState.weather !== draftState.weather || advisorState.ec !== draftState.ec) {
      setDraftState(prev => ({
        ...prev,
        weather: advisorState.weather,
        ec: advisorState.ec
      }));
    }
  }, [advisorState.weather, advisorState.ec]);
  const handleUpdate = () => {
    setAdvisorState(draftState);
  };
  const handleReset = () => {
    const resetState = {
      ...draftState,
      weather: 'norm',
      ec: 'opt',
      stage: 'bloom',
      symptoms: 'none'
    };
    setDraftState(resetState);
  };
  const recommendation = useMemo(() => getSmartRecommendation(advisorState), [advisorState]);
  const isDirty = JSON.stringify(draftState) !== JSON.stringify(advisorState);
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 rounded-3xl border-2 border-stone-200 shadow-sm space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Calculator, {
    className: "text-stone-700",
    size: 24
  }), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-black uppercase tracking-widest text-stone-800"
  }, t('advisor'))), /*#__PURE__*/React.createElement("button", {
    onClick: handleReset,
    className: "p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-full transition-colors",
    title: t('lbl_reset')
  }, /*#__PURE__*/React.createElement(RotateCcw, {
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold text-stone-500 uppercase tracking-wide"
  }, t('lbl_crop_type')), /*#__PURE__*/React.createElement("select", {
    value: draftState.crop,
    onChange: e => setDraftState({
      ...draftState,
      crop: e.target.value
    }),
    className: "w-full p-3 bg-stone-50 border border-stone-100 rounded-xl font-bold text-stone-800 focus:outline-none"
  }, SOIL_OPTIONS.cropType.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt.id,
    value: opt.id
  }, t(opt.label))))), draftState.crop === 'durian' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold text-stone-500 uppercase tracking-wide"
  }, t('lbl_variety')), /*#__PURE__*/React.createElement("select", {
    value: draftState.variety,
    onChange: e => setDraftState({
      ...draftState,
      variety: e.target.value
    }),
    className: "w-full p-3 bg-stone-50 border border-stone-100 rounded-xl font-bold text-stone-800 focus:outline-none"
  }, SOIL_OPTIONS.cropVariety.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt.id,
    value: opt.id
  }, t(opt.label))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold text-stone-500 uppercase tracking-wide"
  }, t('lbl_tree_age')), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "1",
    max: "50",
    value: draftState.age,
    onChange: e => setDraftState({
      ...draftState,
      age: e.target.value
    }),
    className: "w-full p-3 bg-stone-50 border border-stone-100 rounded-xl font-bold text-stone-800 focus:outline-none"
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold text-stone-500 uppercase tracking-wide"
  }, t('lbl_weather')), /*#__PURE__*/React.createElement("select", {
    value: draftState.weather,
    onChange: e => setDraftState({
      ...draftState,
      weather: e.target.value
    }),
    className: "w-full p-3 bg-sky-50 border border-sky-100 rounded-xl font-bold text-sky-800 focus:outline-none"
  }, SOIL_OPTIONS.weather.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt.id,
    value: opt.id
  }, t(opt.label))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold text-stone-500 uppercase tracking-wide"
  }, t('lbl_ec')), /*#__PURE__*/React.createElement("select", {
    value: draftState.ec,
    onChange: e => setDraftState({
      ...draftState,
      ec: e.target.value
    }),
    className: "w-full p-3 bg-purple-50 border border-purple-100 rounded-xl font-bold text-purple-800 focus:outline-none"
  }, SOIL_OPTIONS.ec.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt.id,
    value: opt.id
  }, t(opt.label))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1 md:col-span-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold text-stone-500 uppercase tracking-wide"
  }, t('lbl_crop_stage')), /*#__PURE__*/React.createElement("select", {
    value: draftState.stage,
    onChange: e => setDraftState({
      ...draftState,
      stage: e.target.value
    }),
    className: "w-full p-3 bg-emerald-50 border border-emerald-100 rounded-xl font-bold text-emerald-800 focus:outline-none"
  }, SOIL_OPTIONS.cropStage.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt.id,
    value: opt.id
  }, t(opt.label)))), draftState.stage === 'maturation' && draftState.crop === 'durian' && /*#__PURE__*/React.createElement("div", {
    className: "mt-3 p-3 bg-emerald-100/50 border border-emerald-200 rounded-xl flex gap-3 items-start animate-in fade-in slide-in-from-top-1"
  }, /*#__PURE__*/React.createElement(Info, {
    size: 18,
    className: "text-emerald-600 shrink-0 mt-0.5"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold text-emerald-800 leading-snug"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-black uppercase tracking-wide text-xs block mb-0.5 opacity-80"
  }, "Expected Harvest Window"), draftState.variety === 'gp' && 'Golden Phoenix (D198) naturally drops around 90–100 DAA.', draftState.variety === 'mk' && 'Musang King (D197) naturally drops around 95–105 DAA.', draftState.variety === 'rp' && 'Red Prawn (D175) naturally drops around 100–105 DAA.', draftState.variety === 'd101' && 'D101 naturally drops around 100–105 DAA.', draftState.variety === 'tekka' && 'Tekka (D160) naturally drops around 100–105 DAA.', draftState.variety === 'd24' && 'D24 (Sultan) naturally drops around 105–115 DAA.', draftState.variety === 'tk' && 'Tupai King (D214) naturally drops around 105–110 DAA.', draftState.variety === 'bt' && 'Black Thorn (D200) naturally drops around 110–120 DAA.', draftState.variety === 'ioi' && 'IOI / Hajah Hasmah (D168) naturally drops around 110–115 DAA.', draftState.variety === 'mt' && 'Monthong (D159) naturally drops around 120–130 DAA.', draftState.variety === 'generic' && 'Generic/Kampung clones typically drop around 90–110 DAA.'))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1 md:col-span-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold text-stone-500 uppercase tracking-wide"
  }, t('lbl_leaf_analysis')), /*#__PURE__*/React.createElement("select", {
    value: draftState.symptoms,
    onChange: e => setDraftState({
      ...draftState,
      symptoms: e.target.value
    }),
    className: "w-full p-3 bg-amber-50 border border-amber-100 rounded-xl font-bold text-amber-800 focus:outline-none"
  }, SOIL_OPTIONS.symptoms.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt.id,
    value: opt.id
  }, t(opt.label)))))), /*#__PURE__*/React.createElement("button", {
    onClick: handleUpdate,
    className: `w-full py-4 mt-6 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-lg
        ${isDirty ? 'bg-emerald-600 text-white shadow-emerald-200 hover:bg-emerald-700 animate-pulse' : 'bg-stone-100 text-stone-400 cursor-default'}`
  }, /*#__PURE__*/React.createElement(ArrowRight, {
    size: 24
  }), t('lbl_calculate')), /*#__PURE__*/React.createElement("div", {
    key: JSON.stringify(recommendation),
    className: "mt-6 bg-emerald-50/60 p-6 md:p-8 rounded-[2.5rem] border-2 border-emerald-100 shadow-xl relative overflow-hidden animate-slide-up space-y-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 p-6 opacity-10"
  }, /*#__PURE__*/React.createElement(Sparkles, {
    size: 120,
    className: "text-emerald-800"
  })), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 space-y-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-emerald-800 text-base font-black uppercase tracking-widest"
  }, /*#__PURE__*/React.createElement(ClipboardList, {
    size: 24
  }), " ", t('lbl_recommendation')), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3"
  }, recommendation.mixIds.map((item, idx) => /*#__PURE__*/React.createElement("span", {
    key: idx,
    className: "bg-white border-2 border-emerald-200 text-emerald-900 px-6 py-3 rounded-2xl font-bold text-xl shadow-sm"
  }, getNutrientLabel(item))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-emerald-800 text-base font-black uppercase tracking-widest"
  }, /*#__PURE__*/React.createElement(Info, {
    size: 24
  }), " ", t('lbl_rationale')), /*#__PURE__*/React.createElement("ul", {
    className: "text-xl font-semibold text-emerald-900 space-y-3 list-disc pl-6 leading-relaxed"
  }, recommendation.rationale.map((r, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, r)))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 rounded-3xl border-2 border-emerald-100 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-stone-400 font-black uppercase tracking-wider mb-2"
  }, t('lbl_rate_timing')), /*#__PURE__*/React.createElement("div", {
    className: "text-xl font-black text-stone-800 leading-tight"
  }, recommendation.rate), /*#__PURE__*/React.createElement("div", {
    className: "text-lg text-stone-500 mt-2 font-bold"
  }, recommendation.timing)), /*#__PURE__*/React.createElement("div", {
    className: `p-6 rounded-3xl border-2 shadow-sm ${recommendation.hasWarning ? 'bg-red-50 border-red-100' : 'bg-white border-emerald-100'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `text-sm font-black uppercase tracking-wider mb-2 ${recommendation.hasWarning ? 'text-red-400' : 'text-stone-400'}`
  }, t('lbl_compat_warn')), /*#__PURE__*/React.createElement("div", {
    className: `text-xl font-black leading-snug ${recommendation.hasWarning ? 'text-red-800' : 'text-emerald-700'}`
  }, recommendation.compatibility))))));
};
const SoilControlPanel = ({
  soil,
  setSoil
}) => {
  const t = k => TRANSLATIONS.en && TRANSLATIONS.en[k] ? TRANSLATIONS.en[k] : k;
  const [showOmHelp, setShowOmHelp] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 rounded-3xl border-2 border-stone-200 shadow-sm space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Settings, {
    className: "text-stone-700",
    size: 24
  }), /*#__PURE__*/React.createElement("h3", {
    className: "text-base font-black uppercase tracking-widest text-stone-800"
  }, t('lbl_soil_conditions'))), /*#__PURE__*/React.createElement("p", {
    className: "text-lg font-medium text-stone-500 -mt-2"
  }, t('lbl_adjust_soil')), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 pt-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-base font-bold text-stone-700 block"
  }, t('lbl_ph')), /*#__PURE__*/React.createElement("div", {
    className: "relative w-full h-10 flex items-center select-none"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute w-full h-2 bg-stone-200 rounded-full overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full bg-gradient-to-r from-red-300 via-green-300 to-blue-300 opacity-50"
  })), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-1/2 -mt-6 h-12 w-12 bg-white border-[3px] border-stone-800 rounded-full shadow-xl flex items-center justify-center z-10 pointer-events-none transition-all duration-75 ease-out",
    style: {
      left: `${(soil.ph - 4.0) / 5.0 * 100}%`,
      transform: `translateX(-50%)`
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: `text-sm font-black ${soil.ph < 5.5 ? 'text-red-600' : soil.ph > 7.5 ? 'text-blue-600' : 'text-green-600'}`
  }, soil.ph)), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "4.0",
    max: "9.0",
    step: "0.5",
    value: soil.ph,
    onChange: e => setSoil({
      ...soil,
      ph: parseFloat(e.target.value)
    }),
    className: "absolute w-full h-full opacity-0 cursor-pointer z-20",
    style: {
      margin: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-[10px] text-stone-400 font-bold uppercase mt-1 px-1"
  }, /*#__PURE__*/React.createElement("span", null, t('lbl_acid')), /*#__PURE__*/React.createElement("span", null, t('lbl_neutral')), /*#__PURE__*/React.createElement("span", null, t('lbl_alkaline')))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-base font-bold text-stone-700 block"
  }, t('lbl_weather')), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-2"
  }, SOIL_OPTIONS.weather.map(opt => /*#__PURE__*/React.createElement("button", {
    key: opt.id,
    onClick: () => setSoil({
      ...soil,
      weather: opt.id
    }),
    className: `flex-1 py-3 px-3 rounded-xl text-sm font-bold transition-all border flex items-center justify-center gap-2 ${soil.weather === opt.id ? 'bg-sky-700 text-white border-sky-700 shadow-md' : 'bg-sky-50 text-sky-600 border-sky-100 hover:bg-sky-100'}`
  }, /*#__PURE__*/React.createElement(opt.icon, {
    size: 18
  }), t(opt.label))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-base font-bold text-stone-700 block"
  }, t('lbl_ec')), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-2"
  }, SOIL_OPTIONS.ec.map(opt => /*#__PURE__*/React.createElement("button", {
    key: opt.id,
    onClick: () => setSoil({
      ...soil,
      ec: opt.id
    }),
    className: `flex-1 py-3 px-3 rounded-xl text-sm font-bold transition-all border ${soil.ec === opt.id ? 'bg-purple-700 text-white border-purple-700 shadow-md' : 'bg-purple-50 text-purple-600 border-purple-100 hover:bg-purple-100'}`
  }, t(opt.label))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-base font-bold text-stone-700 block"
  }, t('lbl_texture')), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-2"
  }, SOIL_OPTIONS.texture.map(opt => /*#__PURE__*/React.createElement("button", {
    key: opt.id,
    onClick: () => setSoil({
      ...soil,
      texture: opt.id
    }),
    className: `flex-1 py-3 px-3 rounded-xl text-sm font-bold transition-all border ${soil.texture === opt.id ? 'bg-stone-800 text-white border-stone-800 shadow-md' : 'bg-stone-50 text-stone-500 border-stone-200 hover:bg-stone-100'}`
  }, t(opt.label))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-base font-bold text-stone-700 block"
  }, t('lbl_om')), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowOmHelp(!showOmHelp),
    className: "text-stone-400 hover:text-emerald-600 transition-colors"
  }, /*#__PURE__*/React.createElement(HelpCircle, {
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-2"
  }, SOIL_OPTIONS.om.map(opt => /*#__PURE__*/React.createElement("button", {
    key: opt.id,
    onClick: () => setSoil({
      ...soil,
      om: opt.id
    }),
    className: `flex-1 py-3 px-3 rounded-xl text-sm font-bold transition-all border ${soil.om === opt.id ? 'bg-emerald-700 text-white border-emerald-700 shadow-md' : 'bg-emerald-50 text-emerald-600 border-emerald-100 hover:bg-emerald-100'}`
  }, t(opt.label)))), showOmHelp && /*#__PURE__*/React.createElement("div", {
    className: "mt-4 bg-stone-50 rounded-2xl p-6 border-2 border-stone-200 text-stone-800 space-y-6 animate-in fade-in zoom-in-95 duration-200"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mb-3 text-stone-700"
  }, /*#__PURE__*/React.createElement(Eye, {
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-black uppercase tracking-widest"
  }, t('lbl_visual'))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 gap-3 text-base font-medium text-stone-600"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex flex-col sm:flex-row sm:items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-black text-stone-800 text-xs uppercase tracking-wide min-w-[4rem]"
  }, t('opt_low')), /*#__PURE__*/React.createElement("span", {
    className: "text-stone-600"
  }, t('desc_visual_low'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex flex-col sm:flex-row sm:items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-black text-stone-800 text-xs uppercase tracking-wide min-w-[4rem]"
  }, t('opt_med')), /*#__PURE__*/React.createElement("span", {
    className: "text-stone-600"
  }, t('desc_visual_med'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex flex-col sm:flex-row sm:items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-black text-stone-800 text-xs uppercase tracking-wide min-w-[4rem]"
  }, t('opt_high')), /*#__PURE__*/React.createElement("span", {
    className: "text-stone-600"
  }, t('desc_visual_high'))))), /*#__PURE__*/React.createElement("div", {
    className: "border-t-2 border-stone-200 pt-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mb-3 text-stone-700"
  }, /*#__PURE__*/React.createElement(Beaker, {
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-black uppercase tracking-widest"
  }, t('lbl_h2o2'))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 gap-3 text-base font-medium text-stone-600"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex flex-col sm:flex-row sm:items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-black text-stone-800 text-xs uppercase tracking-wide min-w-[4rem]"
  }, t('opt_low')), /*#__PURE__*/React.createElement("span", {
    className: "text-stone-600"
  }, t('desc_h2o2_low'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex flex-col sm:flex-row sm:items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-black text-stone-800 text-xs uppercase tracking-wide min-w-[4rem]"
  }, t('opt_med')), /*#__PURE__*/React.createElement("span", {
    className: "text-stone-600"
  }, t('desc_h2o2_med'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex flex-col sm:flex-row sm:items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-black text-stone-800 text-xs uppercase tracking-wide min-w-[4rem]"
  }, t('opt_high')), /*#__PURE__*/React.createElement("span", {
    className: "text-stone-600"
  }, t('desc_h2o2_high'))))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-base font-bold text-stone-700 block"
  }, t('lbl_cation')), /*#__PURE__*/React.createElement("select", {
    value: soil.cation,
    onChange: e => setSoil({
      ...soil,
      cation: e.target.value
    }),
    className: "w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-base font-bold text-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400"
  }, SOIL_OPTIONS.cation.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt.id,
    value: opt.id
  }, t(opt.label))))));
};
const App = () => {
  const [mode, setMode] = useState(() => {
    try {
      const saved = localStorage.getItem('agripro_mode_pref');
      return ['wheel', 'advisor', 'mix', 'ph'].includes(saved) ? saved : 'wheel';
    } catch (e) {
      return 'wheel';
    }
  });
  const [selectedNutrient, setSelectedNutrient] = useState(null);
  const [inhibitionOffsets, setInhibitionOffsets] = useState(() => {
    try {
      const saved = localStorage.getItem('agripro_inhibition_offsets');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });
  const [soilConditions, setSoilConditions] = useState({
    ph: 6.5,
    texture: 'loam',
    om: 'med',
    cation: 'bal',
    weather: 'norm',
    ec: 'opt'
  });
  const [advisorState, setAdvisorState] = useState(() => {
    const defaults = {
      crop: 'durian',
      variety: 'mk',
      age: 10,
      weather: 'norm',
      ec: 'opt',
      stage: 'bloom',
      symptoms: 'none'
    };
    try {
      const saved = localStorage.getItem('agripro_advisor_state');
      return saved ? {
        ...defaults,
        ...JSON.parse(saved)
      } : defaults;
    } catch (e) {
      return defaults;
    }
  });
  useEffect(() => {
    localStorage.setItem('agripro_mode_pref', mode);
  }, [mode]);
  useEffect(() => {
    localStorage.setItem('agripro_advisor_state', JSON.stringify(advisorState));
  }, [advisorState]);
  useEffect(() => {
    setAdvisorState(prev => ({
      ...prev,
      weather: soilConditions.weather,
      ec: soilConditions.ec
    }));
  }, [soilConditions.weather, soilConditions.ec]);
  useEffect(() => {
    localStorage.setItem('agripro_inhibition_offsets', JSON.stringify(inhibitionOffsets));
  }, [inhibitionOffsets]);
  const t = key => {
    if (!TRANSLATIONS.en) return key;
    return TRANSLATIONS.en[key] || key;
  };
  const handleNutrientSelect = nutrient => {
    setSelectedNutrient(nutrient);
  };
  const soilImpacts = useMemo(() => {
    return analyzeSoilImpact(selectedNutrient?.id, soilConditions);
  }, [selectedNutrient, soilConditions]);
  const recommendedNutrients = useMemo(() => {
    if (mode === 'advisor') {
      const rec = getSmartRecommendation(advisorState);
      return rec.mixIds;
    }
    return [];
  }, [mode, advisorState]);
  return /*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-[#FDFCFB] font-sans pb-20 pb-safe-bottom"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200 shadow-sm nav-safe-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row justify-between items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center w-full md:w-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 shrink-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-stone-900 p-2 rounded-xl text-white shadow-lg"
  }, /*#__PURE__*/React.createElement(Leaf, {
    size: 20
  })), /*#__PURE__*/React.createElement("h1", {
    className: "text-lg font-bold text-stone-900"
  }, t('app_title')))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 md:gap-8 overflow-x-auto no-scrollbar w-full md:w-auto justify-start md:justify-center px-4 -mx-4 py-1.5"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setMode('wheel'),
    className: `text-lg font-bold transition-all whitespace-nowrap shrink-0 ${mode === 'wheel' ? 'text-stone-900' : 'text-stone-400 hover:text-stone-600'}`
  }, t('knowledge')), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setMode('advisor');
      setSelectedNutrient(null);
    },
    className: `text-lg font-bold transition-all whitespace-nowrap shrink-0 ${mode === 'advisor' ? 'text-stone-900' : 'text-stone-400 hover:text-stone-600'}`
  }, t('advisor')), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMode('mix'),
    className: `text-lg font-bold transition-all whitespace-nowrap shrink-0 ${mode === 'mix' ? 'text-stone-900' : 'text-stone-400 hover:text-stone-600'}`
  }, t('mix_rules')), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMode('ph'),
    className: `text-lg font-bold transition-all whitespace-nowrap shrink-0 ${mode === 'ph' ? 'text-stone-900' : 'text-stone-400 hover:text-stone-600'}`
  }, t('ph_availability'))))), /*#__PURE__*/React.createElement("main", {
    className: "p-6 max-w-6xl mx-auto space-y-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
  }, mode !== 'mix' && mode !== 'ph' && /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col space-y-6"
  }, /*#__PURE__*/React.createElement(NutrientWheel, {
    selectedId: selectedNutrient?.id,
    onSelect: handleNutrientSelect,
    inhibitionOffsets: inhibitionOffsets,
    onOffsetChange: setInhibitionOffsets,
    recommendedNutrients: recommendedNutrients,
    mode: mode
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-4 text-[11px] font-black uppercase tracking-widest text-stone-400 justify-center bg-stone-50/50 p-4 rounded-2xl border border-stone-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-2.5 h-2.5 bg-red-600 rounded-full shadow-sm"
  }), " ", t('antagonism')), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-2.5 h-2.5 bg-orange-500 rounded-full shadow-sm"
  }), " ", t('inhibition')), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-2.5 h-2.5 bg-emerald-600 rounded-full shadow-sm"
  }), " ", t('synergy'))))), mode === 'mix' ? /*#__PURE__*/React.createElement("div", {
    className: "col-span-1 lg:col-span-2"
  }, /*#__PURE__*/React.createElement(MixRulesPanel, null)) : mode === 'ph' ? /*#__PURE__*/React.createElement("div", {
    className: "col-span-1 lg:col-span-2"
  }, /*#__PURE__*/React.createElement(PHChart, null)) : mode === 'advisor' ? /*#__PURE__*/React.createElement("div", {
    className: "animate-slide-up space-y-6"
  }, /*#__PURE__*/React.createElement(SmartAdvisorPanel, {
    advisorState: advisorState,
    setAdvisorState: setAdvisorState
  })) : selectedNutrient ? /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 md:p-8 rounded-[2.5rem] border-2 border-stone-200 shadow-2xl animate-slide-up space-y-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-start"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-3xl md:text-5xl font-black text-stone-900 mb-4"
  }, t('elem_' + selectedNutrient.name)), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3 flex-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-4 py-1.5 bg-stone-100 rounded-full text-xs font-black text-stone-600 uppercase tracking-widest border border-stone-200"
  }, t('cat_' + selectedNutrient.type)), /*#__PURE__*/React.createElement("span", {
    className: `px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border ${selectedNutrient.mobility === 'Mobile' ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-orange-50 text-orange-600 border-orange-100'}`
  }, t('mob_' + selectedNutrient.mobility)))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSelectedNutrient(null),
    className: "p-2 hover:bg-stone-100 rounded-full transition-colors"
  }, /*#__PURE__*/React.createElement(XCircle, {
    size: 36,
    className: "text-stone-300 hover:text-stone-900"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-stone-50/50 p-6 rounded-3xl border-2 border-stone-100 space-y-4 shadow-sm hover:shadow-md transition-shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-center"
  }, /*#__PURE__*/React.createElement(BookOpen, {
    className: "text-stone-700",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-base font-black uppercase tracking-widest text-stone-800"
  }, t('lbl_metabolism'))), /*#__PURE__*/React.createElement("p", {
    className: "text-xl md:text-2xl font-semibold italic text-stone-800 leading-relaxed border-l-4 border-stone-200 pl-6"
  }, "\"", t('info_' + selectedNutrient.id + '_func'), "\"")), selectedNutrient.id === 'AA' && /*#__PURE__*/React.createElement("div", {
    className: "bg-pink-50 p-6 rounded-3xl border-2 border-pink-100 space-y-3 shadow-sm relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -right-6 -top-6 opacity-10"
  }, /*#__PURE__*/React.createElement(Atom, {
    size: 120,
    className: "text-pink-800"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-center relative z-10"
  }, /*#__PURE__*/React.createElement(Atom, {
    className: "text-pink-600",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-base font-black uppercase tracking-widest text-pink-700"
  }, t('info_AA_zwitterion_title'))), /*#__PURE__*/React.createElement("p", {
    className: "font-semibold text-xl text-pink-900 leading-relaxed relative z-10 whitespace-pre-line"
  }, t('info_AA_zwitterion_desc'))), selectedNutrient.enzymes && selectedNutrient.enzymes.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "bg-violet-50/60 p-6 rounded-3xl border-2 border-violet-100 space-y-4 shadow-sm hover:shadow-md transition-shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-center"
  }, /*#__PURE__*/React.createElement(FileText, {
    className: "text-violet-700",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-base font-black uppercase tracking-widest text-stone-800"
  }, t('lbl_enzymes'))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-4"
  }, selectedNutrient.enzymes.map((enzyme, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "bg-white p-5 rounded-2xl border-2 border-violet-100 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xl font-black text-violet-900 mb-1"
  }, enzyme.zh_name), /*#__PURE__*/React.createElement("div", {
    className: "text-lg font-medium text-violet-700 opacity-90"
  }, enzyme.zh_func))))), /*#__PURE__*/React.createElement("div", {
    className: "bg-blue-50/50 p-6 rounded-3xl border-2 border-blue-100 space-y-4 shadow-sm hover:shadow-md transition-shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-center"
  }, /*#__PURE__*/React.createElement(ShoppingBag, {
    className: "text-blue-700",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-base font-black uppercase tracking-widest text-blue-800"
  }, t('lbl_market_insight'))), /*#__PURE__*/React.createElement("p", {
    className: "font-semibold text-xl text-blue-900 leading-relaxed whitespace-pre-line"
  }, t('info_' + selectedNutrient.id + '_comm'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-indigo-50/50 p-6 rounded-3xl border-2 border-indigo-100 space-y-4 shadow-sm hover:shadow-md transition-shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-center"
  }, /*#__PURE__*/React.createElement(Target, {
    className: "text-indigo-700",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-base font-black uppercase tracking-widest text-indigo-800"
  }, t('lbl_app_strategy'))), /*#__PURE__*/React.createElement("p", {
    className: "font-semibold text-xl text-indigo-900 leading-relaxed opacity-90 whitespace-pre-line"
  }, t('info_' + selectedNutrient.id + '_app'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-stone-50/50 p-6 rounded-3xl border-2 border-stone-100 space-y-4 shadow-sm hover:shadow-md transition-shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-center"
  }, /*#__PURE__*/React.createElement(Sprout, {
    className: "text-stone-700",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-base font-black uppercase tracking-widest text-stone-800"
  }, t('lbl_common_sources'))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3"
  }, selectedNutrient.sources.map((source, idx) => /*#__PURE__*/React.createElement("span", {
    key: idx,
    className: "bg-white border-2 border-stone-200 text-stone-700 font-bold px-4 py-2.5 rounded-xl text-lg shadow-sm"
  }, t(source))))), selectedNutrient.mobility === 'Immobile' && /*#__PURE__*/React.createElement("div", {
    className: "bg-violet-50 p-6 rounded-3xl border-2 border-violet-100 space-y-4 shadow-sm relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -right-4 -top-4 opacity-10"
  }, /*#__PURE__*/React.createElement(Wind, {
    size: 100,
    className: "text-violet-800"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-center relative z-10"
  }, /*#__PURE__*/React.createElement(Wind, {
    className: "text-violet-700",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-base font-black uppercase tracking-widest text-stone-800"
  }, t('lbl_immobile_insight'))), /*#__PURE__*/React.createElement("div", {
    className: "font-semibold text-xl text-violet-900 leading-relaxed relative z-10 whitespace-pre-line"
  }, t('msg_immobile_advice'))), TRANSLATIONS.en && TRANSLATIONS.en['info_' + selectedNutrient.id + '_bio'] && /*#__PURE__*/React.createElement("div", {
    className: "bg-emerald-50/60 p-6 rounded-3xl border-2 border-emerald-100 space-y-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -right-4 -top-4 opacity-10"
  }, /*#__PURE__*/React.createElement(Flower2, {
    size: 100,
    className: "text-emerald-800"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-center relative z-10"
  }, /*#__PURE__*/React.createElement(Flower2, {
    className: "text-emerald-700",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-base font-black uppercase tracking-widest text-emerald-800"
  }, t('lbl_bio_synergy'))), /*#__PURE__*/React.createElement("p", {
    className: "font-semibold text-xl text-emerald-900 leading-relaxed relative z-10"
  }, t('info_' + selectedNutrient.id + '_bio'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-red-50/50 p-6 rounded-3xl border-2 border-red-100 space-y-4 shadow-sm hover:shadow-md transition-shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-center"
  }, /*#__PURE__*/React.createElement(Zap, {
    className: "text-red-700",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-base font-black uppercase tracking-widest text-red-800"
  }, t('antagonism'))), /*#__PURE__*/React.createElement("p", {
    className: "font-semibold text-stone-900 text-xl leading-tight"
  }, selectedNutrient.antagonism.map(id => {
    const nut = NUTRIENTS.find(n => n.id === id);
    return nut ? TRANSLATIONS.en['elem_' + nut.name] ? TRANSLATIONS.en['elem_' + nut.name] : nut.name : id;
  }).join(', ') || t('lbl_none')), TRANSLATIONS.en && TRANSLATIONS.en['info_' + selectedNutrient.id + '_antag'] && /*#__PURE__*/React.createElement("div", {
    className: "mt-4 pt-4 border-t border-red-200/60 text-xl font-semibold text-red-800 leading-relaxed whitespace-pre-line"
  }, t('info_' + selectedNutrient.id + '_antag'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-orange-50/50 p-6 rounded-3xl border-2 border-orange-100 space-y-4 shadow-sm hover:shadow-md transition-shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(AlertTriangle, {
    className: "text-orange-700",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-base font-black uppercase tracking-widest text-orange-800"
  }, t('lbl_high_conc_inhib'))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-3"
  }, selectedNutrient.inhibition && selectedNutrient.inhibition.length > 0 ? selectedNutrient.inhibition.map((item, idx) => {
    const nut = NUTRIENTS.find(n => n.id === item.el);
    const rawName = nut ? nut.name : item.el;
    const translatedName = TRANSLATIONS.en['elem_' + rawName] ? TRANSLATIONS.en['elem_' + rawName] : rawName;
    const displayVal = t(item.val);
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: "flex flex-col sm:flex-row sm:items-center justify-between bg-white/60 p-4 rounded-xl border border-orange-200 shadow-sm gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-semibold text-stone-700 text-xl flex items-center gap-2"
    }, t('lbl_inhibits'), " ", /*#__PURE__*/React.createElement("span", {
      className: "text-stone-900"
    }, translatedName)), /*#__PURE__*/React.createElement("span", {
      className: "text-lg font-semibold text-orange-900 bg-orange-200 px-3 py-1.5 rounded-lg shadow-sm whitespace-nowrap border border-orange-300/50"
    }, t('lbl_when'), " ", displayVal));
  }) : /*#__PURE__*/React.createElement("p", {
    className: "font-semibold text-stone-900 text-xl leading-tight opacity-50"
  }, t('lbl_none')))), /*#__PURE__*/React.createElement("div", {
    className: "bg-emerald-50/50 p-6 rounded-3xl border-2 border-emerald-100 space-y-4 shadow-sm hover:shadow-md transition-shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-center"
  }, /*#__PURE__*/React.createElement(Sparkles, {
    className: "text-emerald-700",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-base font-black uppercase tracking-widest text-emerald-800"
  }, t('synergy'))), /*#__PURE__*/React.createElement("p", {
    className: "font-semibold text-stone-900 text-xl leading-tight"
  }, selectedNutrient.synergy?.map(id => {
    const nut = NUTRIENTS.find(n => n.id === id);
    return nut ? TRANSLATIONS.en['elem_' + nut.name] ? TRANSLATIONS.en['elem_' + nut.name] : nut.name : id;
  }).join(', ') || t('lbl_none')))), /*#__PURE__*/React.createElement("div", {
    className: "p-8 bg-amber-50 rounded-[2.5rem] border-2 border-amber-200 shadow-inner relative overflow-hidden group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform"
  }, /*#__PURE__*/React.createElement(AlertTriangle, {
    size: 80,
    className: "text-amber-800"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mb-3"
  }, /*#__PURE__*/React.createElement(Thermometer, {
    className: "text-amber-700",
    size: 24
  }), /*#__PURE__*/React.createElement("h4", {
    className: "text-base font-black text-amber-700 uppercase tracking-[0.2em]"
  }, t('lbl_def_signal'))), /*#__PURE__*/React.createElement("p", {
    className: "text-amber-900 font-semibold text-xl leading-relaxed relative z-10"
  }, t('info_' + selectedNutrient.id + '_def'))), /*#__PURE__*/React.createElement(SoilControlPanel, {
    soil: soilConditions,
    setSoil: setSoilConditions
  }), /*#__PURE__*/React.createElement("div", {
    className: "bg-stone-50/50 p-6 rounded-3xl border-2 border-stone-200 space-y-4 shadow-sm hover:shadow-md transition-shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-center"
  }, /*#__PURE__*/React.createElement(Layers, {
    className: "text-stone-700",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-base font-black uppercase tracking-widest text-stone-800"
  }, t('lbl_soil_impact'))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-4"
  }, soilImpacts.length > 0 ? soilImpacts.map((impact, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: `flex items-start gap-4 p-4 rounded-2xl border-2 ${impact.level === 'high' ? 'bg-red-50 border-red-200 text-red-900' : impact.level === 'med' ? 'bg-orange-50 border-orange-200 text-orange-900' : impact.level === 'good' ? 'bg-green-50 border-green-200 text-green-900' : 'bg-white border-stone-200 text-stone-700'}`
  }, impact.level === 'high' ? /*#__PURE__*/React.createElement(AlertTriangle, {
    className: "text-red-600 shrink-0 mt-1",
    size: 24
  }) : impact.level === 'good' ? /*#__PURE__*/React.createElement(CheckCircle, {
    className: "text-green-600 shrink-0 mt-1",
    size: 24
  }) : /*#__PURE__*/React.createElement(Info, {
    className: "text-orange-600 shrink-0 mt-1",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-lg font-bold leading-snug"
  }, impact.msg))) : /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 p-4 rounded-2xl bg-green-50 border-2 border-green-200 text-green-800"
  }, /*#__PURE__*/React.createElement(CheckCircle, {
    className: "text-green-600 shrink-0",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-lg font-bold leading-snug"
  }, t('msg_soil_ok')))))) : /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center justify-center border-4 border-dashed border-stone-100 rounded-[2.5rem] h-[600px] text-stone-400 font-bold space-y-6 bg-stone-50/30 animate-pulse"
  }, /*#__PURE__*/React.createElement(Activity, {
    size: 64,
    className: "opacity-10"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-xl"
  }, t('tap_element')))))));
};

// === Auto-generated mount (PWA wrapper) ===
(function mountApp() {
  const rootEl = document.getElementById('root');
  if (!rootEl) {
    console.error('AgriPro: #root element not found');
    return;
  }
  const root = ReactDOM.createRoot(rootEl);
  root.render(React.createElement(App));

  // Tell the host page (which owns the splash) that React is mounted.
  // The page listens for this event and fades out the splash after the first paint.
  // Two rAFs to be sure the first React commit has actually painted.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.dispatchEvent(new Event('agripro:mounted'));
    });
  });
})();