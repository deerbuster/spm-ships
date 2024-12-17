export type ShipType = 'Atmospheric Vehicle' | 'Ground Vehicle' | 'Marine Vehicle' | 'Powered Armor' | 'Space Vehicle' | 'Submarine Vehicle' | 'Walker' | 'Hopper' | 'Combination';
export type ModificationType = 'New Construction' | 'Retrofit';
export type GoverningBody = 'ISC' | 'Imperial' | 'Other';
export type PowerSource = 'Chemical Fuels' | 'Fission Reactor' | 'Fusion Reactor' | 'Matter/Antimatter Reactor' | 'Vacuum Power Generator' | 'Cosmic Power Generator';
export type FrameSize = 'None'| 'Compact' | 'Small' | 'Medium' | 'Large' | 'UltraLarge';

export type ShipCrew = {
    technicians: number;
    general: number;
    gunneryTechnician: number;
    gunner: number;
    pilot: number;
    additional: number;
  }

export type HullMaterial = {
  category: string; // CAT
  material: string;
  techLevel: number;
  volumeFactor: number;
  costMultiplier: number;
  maximumMass: number;
  strongPointCost: number;
  hardPointCost: number;
  strongPointVolumeMass: number;
  hardPointVolumeMass: number;
};
export type SuperiorAlloy = {
    effect: string; // Description
    costMultiplier: number; // Cost multiplier
  };
  
  
  export interface ArmorBeltOption {
    db: number;
    hitsMultiplier: number; // Percentage increase in hits
    costMultiplier: number;
  }

  export interface ShipFeature {
    advancedCombatComputer?: boolean;
    agileCommunicationsSystem?: boolean;
    agileTargetingSystem?: boolean;
    airlockQuantity: number;
    armoredCockpit?: boolean;
    artificialGravity?: boolean;
    computerTranslator?: boolean;
    cramped?: boolean;
    dockingRingQuantity: number;
    externalSpeakers?: boolean;
    extremeTemperatureShielding?: boolean;
    gFoceSuppressionSystem?: boolean;
    gpsMappingSystem?: boolean;
    infraredHUD?: boolean;
    loLiteHUD?: boolean;
    meleeWeapon?: boolean;
    plush?: boolean;
    shieldedWeapons?: boolean;
    spacious?: boolean;
    telescopicHUD?: boolean;
    topQualityWeapons?: boolean;
    wellShieldedDrives?: boolean;
  }

  export interface EWTechLevel {
    passiveEWMax: number;
    activeEWMax: number;
  }

  export interface QuantumDriveValues {
    volume: number;
    mass: number;
    cost: number;
  }
  
  export interface FrameMarkValues {
    Compact: number;
    Small: number;
    Medium: number;
    Large: number;
    UltraLarge: number;
  }

  export interface TorpedoDetails {
    volume: number;
    palletMass: number;
    torpedoMass: number;
    palletCost: number;
    torpedoCost: number;
    gsSpeed: string; // Gs/Speed format
  }