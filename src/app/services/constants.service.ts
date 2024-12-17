import { Injectable } from "@angular/core";
import { ArmorBeltOption, EWTechLevel, FrameMarkValues, FrameSize, HullMaterial, QuantumDriveValues, SuperiorAlloy, TorpedoDetails } from "../models/types";

@Injectable({
    providedIn: 'root'
})
export class ConstantsService {
    public readonly HULL_MATERIALS: HullMaterial[] = [
        { category: 'XI', material: 'Steel', techLevel: 15, volumeFactor: 0.02, costMultiplier: 1.0, maximumMass: 200000, strongPointCost: 1000, hardPointCost: 10000, strongPointVolumeMass: 3, hardPointVolumeMass: 30 },
        { category: 'XII', material: 'Titanium', techLevel: 16, volumeFactor: 0.02, costMultiplier: 1.5, maximumMass: 300000, strongPointCost: 900, hardPointCost: 9000, strongPointVolumeMass: 2, hardPointVolumeMass: 20 },
        { category: 'XIII', material: 'Crysteel', techLevel: 17, volumeFactor: 0.02, costMultiplier: 3.0, maximumMass: 400000, strongPointCost: 500, hardPointCost: 5000, strongPointVolumeMass: 1, hardPointVolumeMass: 10 },
        { category: 'XIV', material: 'Crystanium', techLevel: 18, volumeFactor: 0.02, costMultiplier: 5.5, maximumMass: 500000, strongPointCost: 100, hardPointCost: 1000, strongPointVolumeMass: 0.4, hardPointVolumeMass: 4 },
        { category: 'XV', material: 'Reinforced Crystani.', techLevel: 18, volumeFactor: 0.06, costMultiplier: 7.0, maximumMass: 600000, strongPointCost: 90, hardPointCost: 900, strongPointVolumeMass: 0.3, hardPointVolumeMass: 3 },
        { category: 'XVI', material: 'Fullerene', techLevel: 18, volumeFactor: 0.02, costMultiplier: 8.5 , maximumMass: 700000, strongPointCost: 80, hardPointCost: 800, strongPointVolumeMass: 0.2, hardPointVolumeMass: 2 },
        { category: 'XVII', material: 'Reinforced Fullerene', techLevel: 18, volumeFactor: 0.06, costMultiplier: 10.0, maximumMass: 800000, strongPointCost: 70, hardPointCost: 700, strongPointVolumeMass: 0.1, hardPointVolumeMass: 1 },
        { category: 'XVIII', material: 'Crystan.Double Hull', techLevel: 19, volumeFactor: 0.10, costMultiplier: 15.0, maximumMass: 900000, strongPointCost: 10, hardPointCost: 100, strongPointVolumeMass: 0.02, hardPointVolumeMass: 0.2 },
        { category: 'XIX', material: 'Fullerene Double Hull', techLevel: 19, volumeFactor: 0.10, costMultiplier: 30.0, maximumMass: 1000000, strongPointCost: 5, hardPointCost: 50, strongPointVolumeMass: 0.01, hardPointVolumeMass: 0.1 },
        { category: 'XX', material: 'Collosium', techLevel: 24, volumeFactor: 0.04, costMultiplier: 50.0, maximumMass: 999999999, strongPointCost: 0, hardPointCost: 0, strongPointVolumeMass: 0, hardPointVolumeMass: 0 },
    ];
      
    public readonly SUPERIOR_ALLOYS: SuperiorAlloy[] = [
        { effect: 'No Superior Alloy', costMultiplier: 1},
        { effect: '+5 DB', costMultiplier: 2.0 },
        { effect: '+10% to hull maximum', costMultiplier: 2.0 },
        { effect: '+10 DB', costMultiplier: 4.0 },
        { effect: '+20% to hull maximum', costMultiplier: 4.0 },
        { effect: '+15 DB', costMultiplier: 8.0 },
        { effect: '+30% to hull maximum', costMultiplier: 8.0 },
        { effect: '+20 DB', costMultiplier: 16.0 },
        { effect: '+40% to hull maximum', costMultiplier: 16.0 },
        { effect: '+25 DB', costMultiplier: 32.0 },
        { effect: '+50% to hull maximum', costMultiplier: 32.0 },
    ];

    public readonly ARMOR_BELT_OPTIONS: ArmorBeltOption[] =[
        { db: 0, hitsMultiplier: 0, costMultiplier: 0 },
        { db: 5, hitsMultiplier: 5, costMultiplier: 100 },
        { db: 10, hitsMultiplier: 10, costMultiplier: 200 },
        { db: 15, hitsMultiplier: 15, costMultiplier: 300 },
        { db: 20, hitsMultiplier: 20, costMultiplier: 400 },
        { db: 25, hitsMultiplier: 25, costMultiplier: 500 },
    ];

    public readonly REINFORCEMENT_TABLE: { massLimit: number; values: { [category: string]: number | string } }[] = [
        { massLimit: 50, values: { XI: 0.05, XII: 0, XIII: 0, XIV: 0, XV: 0, XVI: 0, XVII: 0, XVIII: 0, XIX: 0, XX: 0 } },
        { massLimit: 100, values: { XI: 0.1, XII: 0, XIII: 0, XIV: 0, XV: 0, XVI: 0, XVII: 0, XVIII: 0, XIX: 0, XX: 0 } },
        { massLimit: 200, values: { XI: 0.2, XII: 0.1, XIII: 0, XIV: 0, XV: 0, XVI: 0, XVII: 0, XVIII: 0, XIX: 0, XX: 0 } },
        { massLimit: 300, values: { XI: 0.3, XII: 0.2, XIII: 0.1, XIV: 0, XV: 0, XVI: 0, XVII: 0, XVIII: 0, XIX: 0, XX: 0 } },
        { massLimit: 400, values: { XI: 0.4, XII: 0.3, XIII: 0.2, XIV: 0.1, XV: 0, XVI: 0, XVII: 0, XVIII: 0, XIX: 0, XX: 0 } },
        { massLimit: 500, values: { XI: 0.5, XII: 0.4, XIII: 0.3, XIV: 0.2, XV: 0.1, XVI: 0, XVII: 0, XVIII: 0, XIX: 0, XX: 0 } },
        { massLimit: 600, values: { XI: 0.6, XII: 0.5, XIII: 0.4, XIV: 0.3, XV: 0.2, XVI: 0.1, XVII: 0, XVIII: 0, XIX: 0, XX: 0 } },
        { massLimit: 700, values: { XI: 0.7, XII: 0.6, XIII: 0.5, XIV: 0.4, XV: 0.3, XVI: 0.2, XVII: 0.1, XVIII: 0, XIX: 0, XX: 0 } },
        { massLimit: 800, values: { XI: 0.8, XII: 0.7, XIII: 0.6, XIV: 0.5, XV: 0.4, XVI: 0.3, XVII: 0.2, XVIII: 0.1, XIX: 0, XX: 0 } },
        { massLimit: 900, values: { XI: 0.9, XII: 0.8, XIII: 0.7, XIV: 0.6, XV: 0.5, XVI: 0.4, XVII: 0.3, XVIII: 0.2, XIX: 0.1, XX: 0 } },
        { massLimit: 1000, values: { XI: 1, XII: 0.9, XIII: 0.8, XIV: 0.7, XV: 0.6, XVI: 0.5, XVII: 0.4, XVIII: 0.3, XIX: 0.2, XX: 0.1 } },
        { massLimit: 2000, values: { XI: 1.5, XII: 1.3, XIII: 1.1, XIV: 0.9, XV: 0.7, XVI: 0.6, XVII: 0.5, XVIII: 0.4, XIX: 0.3, XX: 0.2 } },
        { massLimit: 3000, values: { XI: 2, XII: 1.7, XIII: 1.4, XIV: 1.1, XV: 0.8, XVI: 0.7, XVII: 0.6, XVIII: 0.5, XIX: 0.4, XX: 0.3 } },
        { massLimit: 4000, values: { XI: 2.5, XII: 2.1, XIII: 1.7, XIV: 1.3, XV: 0.9, XVI: 0.8, XVII: 0.7, XVIII: 0.6, XIX: 0.5, XX: 0.4 } },
        { massLimit: 5000, values: { XI: 3, XII: 2.5, XIII: 2, XIV: 1.5, XV: 1, XVI: 0.9, XVII: 0.8, XVIII: 0.7, XIX: 0.6, XX: 0.5 } },
        { massLimit: 6000, values: { XI: 3.5, XII: 2.9, XIII: 2.3, XIV: 1.7, XV: 1.1, XVI: 1, XVII: 0.9, XVIII: 0.8, XIX: 0.7, XX: 0.6 } },
        { massLimit: 7000, values: { XI: 4, XII: 3.3, XIII: 2.6, XIV: 1.9, XV: 1.2, XVI: 1.1, XVII: 1, XVIII: 0.9, XIX: 0.8, XX: 0.7 } },
        { massLimit: 8000, values: { XI: 4.5, XII: 3.7, XIII: 2.9, XIV: 2.1, XV: 1.3, XVI: 1.2, XVII: 1.1, XVIII: 1, XIX: 0.9, XX: 0.8 } },
        { massLimit: 9000, values: { XI: 5, XII: 4.1, XIII: 3.2, XIV: 2.3, XV: 1.4, XVI: 1.3, XVII: 1.2, XVIII: 1.1, XIX: 1, XX: 0.9 } },
        { massLimit: 10000, values: { XI: 5.5, XII: 4.5, XIII: 3.5, XIV: 2.5, XV: 1.5, XVI: 1.4, XVII: 1.3, XVIII: 1.2, XIX: 1.1, XX: 1 } },
        { massLimit: 20000, values: { XI: 10, XII: 8, XIII: 6, XIV: 4, XV: 3, XVI: 2, XVII: 1.4, XVIII: 1.3, XIX: 1.2, XX: 1.1 } },
        { massLimit: 30000, values: { XI: 15, XII: 12, XIII: 9, XIV: 6, XV: 4.5, XVI: 3, XVII: 1.5, XVIII: 1.4, XIX: 1.3, XX: 1.2 } },
        { massLimit: 40000, values: { XI: 20, XII: 16, XIII: 12, XIV: 8, XV: 6, XVI: 4, XVII: 1.6, XVIII: 1.5, XIX: 1.4, XX: 1.3 } },
        { massLimit: 50000, values: { XI: 25, XII: 20, XIII: 15, XIV: 10, XV: 7.5, XVI: 5, XVII: 1.7, XVIII: 1.6, XIX: 1.5, XX: 1.4 } },
        { massLimit: 60000, values: { XI: 30, XII: 24, XIII: 18, XIV: 12, XV: 9, XVI: 6, XVII: 1.8, XVIII: 1.7, XIX: 1.6, XX: 1.5 } },
        { massLimit: 70000, values: { XI: 35, XII: 28, XIII: 21, XIV: 14, XV: 10.5, XVI: 7, XVII: 2, XVIII: 1.8, XIX: 1.7, XX: 1.6 } },
        { massLimit: 80000, values: { XI: 40, XII: 32, XIII: 24, XIV: 16, XV: 12, XVI: 8, XVII: 3, XVIII: 2, XIX: 1.8, XX: 1.7 } },
        { massLimit: 90000, values: { XI: 45, XII: 36, XIII: 27, XIV: 18, XV: 13.5, XVI: 9, XVII: 4, XVIII: 3, XIX: 2, XX: 1.8 } },
        { massLimit: 100000, values: { XI: 50, XII: 40, XIII: 30, XIV: 20, XV: 15, XVI: 10, XVII: 5, XVIII: 4, XIX: 3, XX: 2 } },
        { massLimit: 200000, values: { XI: '*', XII: 80, XIII: 60, XIV: 40, XV: 30, XVI: 20, XVII: 10, XVIII: 8, XIX: 6, XX: 4 } },
        { massLimit: 300000, values: { XI: '–', XII: '*', XIII: '*', XIV: 60, XV: 45, XVI: 30, XVII: 15, XVIII: 12, XIX: 9, XX: 6 } },
        { massLimit: 400000, values: { XI: '–', XII: '–', XIII: '*', XIV: 80, XV: 60, XVI: 40, XVII: 20, XVIII: 16, XIX: 12, XX: 8 } },
        { massLimit: 500000, values: { XI: '–', XII: '–', XIII: '–', XIV: '*', XV: 75, XVI: 50, XVII: 25, XVIII: 20, XIX: 15, XX: 10 } },
        { massLimit: 600000, values: { XI: '–', XII: '–', XIII: '–', XIV: '–', XV: 90, XVI: 60, XVII: 30, XVIII: 24, XIX: 18, XX: 12 } },
        { massLimit: 700000, values: { XI: '–', XII: '–', XIII: '–', XIV: '–', XV: '–', XVI: 70, XVII: 35, XVIII: 28, XIX: 21, XX: 14 } },
        { massLimit: 800000, values: { XI: '–', XII: '–', XIII: '–', XIV: '–', XV: '–', XVI: '–', XVII: 40, XVIII: 32, XIX: 24, XX: 16 } },
        { massLimit: 900000, values: { XI: '–', XII: '–', XIII: '–', XIV: '–', XV: '–', XVI: '–', XVII: '–', XVIII: 36, XIX: 27, XX: 18 } },
        { massLimit: 1000000, values: { XI: '–', XII: '–', XIII: '–', XIV: '–', XV: '–', XVI: '–', XVII: '–', XVIII: '–', XIX: 30, XX: 20 } },
        { massLimit: 999999999, values: { XI: '–', XII: '–', XIII: '–', XIV: '–', XV: '–', XVI: '–', XVII: '–', XVIII: '–', XIX: '–', XX: 22 } },  
    ];

    public readonly CREW_MODIFIERS: { [key: number]: { gunnery: number; general: number } } = {
        15: { gunnery: 0.11, general: 0.011 },
        16: { gunnery: 0.1, general: 0.01 },
        17: { gunnery: 0.09, general: 0.009 },
        18: { gunnery: 0.08, general: 0.008 },
        19: { gunnery: 0.07, general: 0.007 },
        20: { gunnery: 0.06, general: 0.006 },
        21: { gunnery: 0.05, general: 0.005 },
        22: { gunnery: 0.04, general: 0.004 },
        23: { gunnery: 0.03, general: 0.003 },
        24: { gunnery: 0.02, general: 0.002 }, // Empire
        25: { gunnery: 0.01, general: 0.001 }, // ISC
        26: { gunnery: 0.009, general: 0.0009 },
        27: { gunnery: 0.004, general: 0.0004 },
        28: { gunnery: 0.002, general: 0.0002 },
        29: { gunnery: 0.001, general: 0.0001 },
    };

    public readonly VACUUM_POWER_GENERATOR: {[techLevel: number]: { mass: number; volume: number; crew: number };} = {
        17: { mass: 10000, volume: 22000, crew: 2 },
        18: { mass: 1000, volume: 2200, crew: 1 },
        19: { mass: 100, volume: 200, crew: 0.9 },
        20: { mass: 9, volume: 18, crew: 0.8 },
        21: { mass: 0.8, volume: 1.6, crew: 0.7 },
        22: { mass: 0.07, volume: 0.14, crew: 0.06 },
        23: { mass: 0.006, volume: 0.012, crew: 0.005 },
        24: { mass: 0.005, volume: 0.01, crew: 0.004 }, // Empire
        25: { mass: 0.004, volume: 0.008, crew: 0.003 }, // ISC
        26: { mass: 0.003, volume: 0.006, crew: 0.002 },
        27: { mass: 0.002, volume: 0.004, crew: 0.001 },
        28: { mass: 0.001, volume: 0.002, crew: 0.001 },
        29: { mass: 0.0005, volume: 0.001, crew: 0.001 },
    };

    public readonly MATTER_ANTIMATTER_REACTOR: {[techLevel: number]: {mass: number; volume: number; fuelMass: number; fuelVolume: number; crew: number;};} = {
        21: { mass: 0.11, volume: 0.22, fuelMass: 0.00008, fuelVolume: 0.0005, crew: 0.02 },
        22: { mass: 0.011, volume: 0.022, fuelMass: 0.00008, fuelVolume: 0.0005, crew: 0.01 },
        23: { mass: 0.01, volume: 0.02, fuelMass: 0.00008, fuelVolume: 0.0005, crew: 0.009 },
        24: { mass: 0.009, volume: 0.018, fuelMass: 0.00008, fuelVolume: 0.0005, crew: 0.008 }, // Empire
        25: { mass: 0.008, volume: 0.016, fuelMass: 0.00008, fuelVolume: 0.0005, crew: 0.007 }, // ISC
        26: { mass: 0.007, volume: 0.014, fuelMass: 0.00008, fuelVolume: 0.0005, crew: 0.006 },
        27: { mass: 0.006, volume: 0.012, fuelMass: 0.00008, fuelVolume: 0.0005, crew: 0.005 },
        28: { mass: 0.005, volume: 0.01, fuelMass: 0.00008, fuelVolume: 0.0005, crew: 0.004 },
        29: { mass: 0.004, volume: 0.008, fuelMass: 0.00008, fuelVolume: 0.0005, crew: 0.003 },
    };

    public readonly FUSION_REACTOR: {[techLevel: number]: {mass: number; volume: number; fuelMass: number; fuelVolume: number; crew: number;};} = {
        17: { mass: 0.11, volume: 0.22, fuelMass: 0.0008, fuelVolume: 0.005, crew: 0.02 },
        18: { mass: 0.011, volume: 0.022, fuelMass: 0.0008, fuelVolume: 0.005, crew: 0.01 },
        19: { mass: 0.01, volume: 0.02, fuelMass: 0.0008, fuelVolume: 0.005, crew: 0.009 },
        20: { mass: 0.009, volume: 0.018, fuelMass: 0.0008, fuelVolume: 0.005, crew: 0.008 },
        21: { mass: 0.008, volume: 0.016, fuelMass: 0.0008, fuelVolume: 0.005, crew: 0.007 },
        22: { mass: 0.007, volume: 0.014, fuelMass: 0.0008, fuelVolume: 0.005, crew: 0.006 },
        23: { mass: 0.006, volume: 0.012, fuelMass: 0.0008, fuelVolume: 0.005, crew: 0.005 },
        24: { mass: 0.005, volume: 0.01, fuelMass: 0.0008, fuelVolume: 0.005, crew: 0.004 }, // Empire
        25: { mass: 0.004, volume: 0.008, fuelMass: 0.0008, fuelVolume: 0.005, crew: 0.003 }, // ISC
        26: { mass: 0.003, volume: 0.006, fuelMass: 0.0008, fuelVolume: 0.005, crew: 0.002 },
        27: { mass: 0.002, volume: 0.004, fuelMass: 0.0008, fuelVolume: 0.005, crew: 0.001 },
        28: { mass: 0.001, volume: 0.002, fuelMass: 0.0008, fuelVolume: 0.005, crew: 0.001 },
        29: { mass: 0.0005, volume: 0.001, fuelMass: 0.0008, fuelVolume: 0.005, crew: 0.001 },
    };

    public readonly RATING_BONUS: { [rating: number]: number } = {
        1: 5,  2: 10,  3: 15,  4: 20,  5: 25,
        6: 30,  7: 35,  8: 40,  9: 45,  10: 50,
        11: 52, 12: 54, 13: 56, 14: 58, 15: 60,
        16: 62, 17: 64, 18: 66, 19: 68, 20: 70,
        21: 71, 22: 72, 23: 73, 24: 74, 25: 75,
        26: 76, 27: 77, 28: 78, 29: 79, 30: 80,
    };

    public readonly MANEUVERABILITY_UNITS: { maxTons: number; rating: number }[] = [
        { maxTons: 50, rating: 0.25 },
        { maxTons: 100, rating: 0.5 },
        { maxTons: 200, rating: 1.5 },
        { maxTons: 300, rating: 2.5 },
        { maxTons: 400, rating: 4 },
        { maxTons: 500, rating: 5.5 },
        { maxTons: 600, rating: 7.5 },
        { maxTons: 700, rating: 9 },
        { maxTons: 800, rating: 11.5 },
        { maxTons: 900, rating: 13.5 },
        { maxTons: 1000, rating: 16 },
        { maxTons: 2000, rating: 45 },
        { maxTons: 3000, rating: 82 },
        { maxTons: 4000, rating: 126 },
        { maxTons: 5000, rating: 177 },
        { maxTons: 6000, rating: 232 },
        { maxTons: 7000, rating: 293 },
        { maxTons: 8000, rating: 358 },
        { maxTons: 9000, rating: 427 },
        { maxTons: 10000, rating: 500 },
        { maxTons: 20000, rating: 1414 },
        { maxTons: 30000, rating: 2598 },
        { maxTons: 40000, rating: 4000 },
        { maxTons: 50000, rating: 5590 },
        { maxTons: 60000, rating: 7348 },
        { maxTons: 70000, rating: 9260 },
        { maxTons: 80000, rating: 11314 },
        { maxTons: 90000, rating: 13500 },
        { maxTons: 100000, rating: 15811 },
        { maxTons: 200000, rating: 44721 },
        { maxTons: 300000, rating: 82158 },
        { maxTons: 400000, rating: 126491 },
        { maxTons: 500000, rating: 176777 },
        { maxTons: 600000, rating: 232379 },
        { maxTons: 700000, rating: 292831 },
        { maxTons: 800000, rating: 357771 },
        { maxTons: 900000, rating: 426907 },
        { maxTons: 1000000, rating: 500000 },
    ];
    public readonly SIZE_OF_MANEUVERABILITY: { [techLevel: number | string]: number } = {
        15: 10,
        16: 10,
        17: 10,
        18: 1,
        19: 1,
        20: 1,
        21: 1,
        22: 1,
        23: 1,
        Imperial: 1,
        24: 1,
        25: 1,
        ISC: 0.9,
        26: 0.8,
        27: 0.4,
        28: 0.2,
        29: 0.1,
    };
    public readonly POINT_DEFENSE_TABLE: { [attacks: number]: { [rating: number]: number } } = {
        1: { 2: 5, 3: 10, 4: 15, 5: 20, 6: 25, 7: 30, 8: 35 },
        2: { 2: 10, 3: 15, 4: 20, 5: 25, 6: 30, 7: 35, 8: 40 },
        3: { 2: 15, 3: 20, 4: 25, 5: 30, 6: 35, 7: 40, 8: 45 },
        4: { 2: 20, 3: 25, 4: 30, 5: 35, 6: 40, 7: 45, 8: 50 },
        5: { 2: 25, 3: 30, 4: 35, 5: 40, 6: 45, 7: 50, 8: 55 },
        6: { 2: 30, 3: 35, 4: 40, 5: 45, 6: 50, 7: 55, 8: 60 },
    };    
    public readonly POINT_DEFENSE_COST_TABLE: { [attacks: number]: { [rating: number]: number } } = {
        1: { 2: 1, 3: 2, 4: 2, 5: 3, 6: 3, 7: 4, 8: 4 },
        2: { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8 },
        3: { 2: 3, 3: 5, 4: 6, 5: 8, 6: 9, 7: 11, 8: 12 },
        4: { 2: 4, 3: 6, 4: 8, 5: 10, 6: 12, 7: 14, 8: 16 },
        5: { 2: 5, 3: 8, 4: 10, 5: 13, 6: 15, 7: 18, 8: 20 },
        6: { 2: 6, 3: 9, 4: 12, 5: 15, 6: 18, 7: 21, 8: 24 },
    };
    public readonly ELECTRONIC_WARFARE_TABLE: {[techLevel: number | string]: { passiveEWMax: number; activeEWMax: number }} = {
        16: { passiveEWMax: 10, activeEWMax: 10 },
        17: { passiveEWMax: 12, activeEWMax: 15 },
        18: { passiveEWMax: 14, activeEWMax: 20 },
        19: { passiveEWMax: 16, activeEWMax: 25 },
        20: { passiveEWMax: 18, activeEWMax: 30 },
        21: { passiveEWMax: 20, activeEWMax: 35 },
        22: { passiveEWMax: 25, activeEWMax: 40 },
        23: { passiveEWMax: 30, activeEWMax: 45 },
        24: { passiveEWMax: 35, activeEWMax: 50 },
        Imperial: { passiveEWMax: 35, activeEWMax: 50 },
        25: { passiveEWMax: 40, activeEWMax: 60 },
        ISC: { passiveEWMax: 42, activeEWMax: 65 },
        26: { passiveEWMax: 45, activeEWMax: 70 },
        27: { passiveEWMax: 50, activeEWMax: 100 },
        28: { passiveEWMax: 100, activeEWMax: 200 },
        29: { passiveEWMax: 200, activeEWMax: 400 },
      };
      public readonly TACHYON_COMM_RIG: {[techLevel: number | string]: { range: number; daysPerLY: number };} = {
        20: { range: 4, daysPerLY: 100 },
        21: { range: 8, daysPerLY: 50 },
        22: { range: 16, daysPerLY: 25 },
        23: { range: 32, daysPerLY: 12.5 },
        Imperial: { range: 53, daysPerLY: 6.25 },
        24: { range: 64, daysPerLY: 3 },
        25: { range: 128, daysPerLY: 1.5 },
        ISC: { range: 218, daysPerLY: 1 },
        26: { range: 256, daysPerLY: 0.75 },
        27: { range: 512, daysPerLY: 0.36 },
        28: { range: 1024, daysPerLY: 0.18 },
        29: { range: 2048, daysPerLY: 0.08 },
    };
    public readonly QUANTUM_COMM_RANGES: {[techLevel: number | string]: number} = {
        23: 10,
        Imperial: 15,
        24: 20,
        25: 40,
        ISC: 40,
        26: 80,
        27: 160,
        28: 320,
        29: 640,
      };    
    public readonly TRACTOR_BEAM_TABLE: { [techLevel: number]: { [frameSize: string]: number }} = {
        22: { Compact: 1, Small: 2, Medium: 3, Large: 4, UltraLarge: 5 },
        23: { Compact: 2, Small: 4, Medium: 6, Large: 8, UltraLarge: 10 },
        24: { Compact: 5, Small: 10, Medium: 15, Large: 20, UltraLarge: 25 },
        25: { Compact: 10, Small: 20, Medium: 30, Large: 40, UltraLarge: 50 },
        26: { Compact: 13, Small: 26, Medium: 39, Large: 52, UltraLarge: 65 },
        27: { Compact: 25, Small: 50, Medium: 75, Large: 100, UltraLarge: 125 },
        28: { Compact: 50, Small: 100, Medium: 150, Large: 175, UltraLarge: 200 },
        29: { Compact: 100, Small: 200, Medium: 300, Large: 400, UltraLarge: 500 },
    };
    public readonly TRACTOR_BEAM_MASS = {
        Compact: 10,
        Small: 20,
        Medium: 30,
        Large: 40,
        UltraLarge: 50,
    };

    public readonly TRACTOR_BEAM_VOLUME = {
        Compact: 10,
        Small: 20,
        Medium: 30,
        Large: 40,
        UltraLarge: 50,
    };

    public readonly TRACTOR_BEAM_COST = {
        Compact: 2800000,
        Small: 11200000,
        Medium: 20400000,
        Large: 35200000,
        UltraLarge: 54000000,
    };
    
    public readonly REACTIONLESS_DRIVE: {[techLevel: number | string]: { mass: number; volume: number; crew: number; powerCost: number };} = {
        22: { mass: 10, volume: 10, crew: 1, powerCost: 10 },
        23: { mass: 5, volume: 5, crew: 0.5, powerCost: 1 },
        Imperial: { mass: 3, volume: 3, crew: 0.3, powerCost: 1 },
        24: { mass: 2, volume: 2, crew: 0.2, powerCost: 1 },
        25: { mass: 1, volume: 1, crew: 0.1, powerCost: 1 },
        ISC: { mass: 0.9, volume: 0.9, crew: 0.09, powerCost: 1 },
        26: { mass: 0.8, volume: 0.8, crew: 0.08, powerCost: 1 },
        27: { mass: 0.4, volume: 0.4, crew: 0.04, powerCost: 1 },
        28: { mass: 0.2, volume: 0.2, crew: 0.02, powerCost: 1 },
        29: { mass: 0.1, volume: 0.1, crew: 0.01, powerCost: 1 },
    };
    public readonly RIF_CHART: {[techLevel: number | string]: { tlfVolume: number; tlfCost: number; baseCost: number };} = {
        Imperial: { tlfVolume: 0.01, tlfCost: 1000, baseCost: 100_000 },
        25: { tlfVolume: 0.001, tlfCost: 100, baseCost: 10_000 },
        ISC: { tlfVolume: 0.0007, tlfCost: 65, baseCost: 6_500 },
        26: { tlfVolume: 0.0001, tlfCost: 10, baseCost: 1_000 },
        27: { tlfVolume: 0.00008, tlfCost: 8, baseCost: 800 },
        28: { tlfVolume: 0.00004, tlfCost: 4, baseCost: 400 },
        29: { tlfVolume: 0.00002, tlfCost: 2, baseCost: 200 },
    };
    public readonly WARP_DRIVE_CHART: { [techLevel: number]: number } = {
        20: 1,
        21: 2,
        22: 4,
        23: 6,
        24: 8,
        25: 10,
        26: 10,
        27: 10,
        28: 10,
        29: 10,
    };
    public readonly FLUX_DRIVE_TLF: { [techLevel: number]: number } = {
        20: 0.5,
        21: 0.4,
        22: 0.3,
        23: 0.2,
        24: 0.1,
        25: 0.09,
        26: 0.08,
        27: 0.07,
        28: 0.06,
        29: 0.05,
    };
    public readonly HYPERDRIVE_TLF: {[techLevel: number]: { tlf: number; baseCost: number };} = {
        20: { tlf: 0.6, baseCost: 1_500_000 },
        21: { tlf: 0.06, baseCost: 150_000 },
        22: { tlf: 0.05, baseCost: 140_000 },
        23: { tlf: 0.04, baseCost: 130_000 },
        24: { tlf: 0.03, baseCost: 120_000 },
        25: { tlf: 0.02, baseCost: 110_000 },
        26: { tlf: 0.01, baseCost: 100_000 },
        27: { tlf: 0.005, baseCost: 50_000 },
        28: { tlf: 0.0025, baseCost: 25_000 },
        29: { tlf: 0.00125, baseCost: 12_500 },
    };
    public readonly LEVEL_1_QUANTUM_DRIVES: { [techLevel: number | string]: QuantumDriveValues } = {
        20: { volume: 1000, mass: 500, cost: 50_000_000 },
        21: { volume: 100, mass: 50, cost: 5_000_000 },
        22: { volume: 80, mass: 40, cost: 4_000_000 },
        23: { volume: 60, mass: 30, cost: 3_000_000 },
        Imperial: { volume: 46, mass: 23, cost: 2_300_000 },
        24: { volume: 40, mass: 20, cost: 2_000_000 },
        25: { volume: 20, mass: 10, cost: 1_000_000 },
        ISC: { volume: 18.6, mass: 9.3, cost: 930_000 },
        26: { volume: 16, mass: 8, cost: 800_000 },
        27: { volume: 8, mass: 4, cost: 400_000 },
        28: { volume: 4, mass: 2, cost: 200_000 },
        29: { volume: 2, mass: 1, cost: 100_000 },
    };
    public readonly LEVEL_2_QUANTUM_DRIVES: { [techLevel: number | string]: QuantumDriveValues } = {
        20: { volume: 10_000, mass: 5_000, cost: 500_000_000 },
        21: { volume: 1000, mass: 500, cost: 50_000_000 },
        22: { volume: 800, mass: 400, cost: 40_000_000 },
        23: { volume: 600, mass: 300, cost: 30_000_000 },
        Imperial: { volume: 460, mass: 230, cost: 23_000_000 },
        24: { volume: 400, mass: 200, cost: 20_000_000 },
        25: { volume: 200, mass: 100, cost: 10_000_000 },
        ISC: { volume: 186, mass: 93, cost: 9_300_000 },
        26: { volume: 160, mass: 80, cost: 8_000_000 },
        27: { volume: 80, mass: 40, cost: 4_000_000 },
        28: { volume: 40, mass: 20, cost: 2_000_000 },
        29: { volume: 20, mass: 10, cost: 1_000_000 },
    };
    
    public readonly LEVEL_3_QUANTUM_DRIVES: { [techLevel: number | string]: QuantumDriveValues } = {
        20: { volume: 100_000, mass: 50_000, cost: 5_000_000_000 },
        21: { volume: 10_000, mass: 5_000, cost: 500_000_000 },
        22: { volume: 8_000, mass: 4_000, cost: 400_000_000 },
        23: { volume: 6_000, mass: 3_000, cost: 300_000_000 },
        Imperial: { volume: 4600, mass: 2300, cost: 230_000_000 },
        24: { volume: 4000, mass: 2000, cost: 200_000_000 },
        25: { volume: 2000, mass: 1000, cost: 100_000_000 },
        ISC: { volume: 1860, mass: 930, cost: 93_000_000 },
        26: { volume: 1600, mass: 800, cost: 80_000_000 },
        27: { volume: 800, mass: 400, cost: 40_000_000 },
        28: { volume: 400, mass: 200, cost: 20_000_000 },
        29: { volume: 200, mass: 100, cost: 10_000_000 },
    };
    public readonly TORPEDO_RATINGS: { [techLevel: number]: FrameMarkValues } = {
        15: { Compact: 5, Small: 10, Medium: 15, Large: 20, UltraLarge: 25 },
        16: { Compact: 5, Small: 10, Medium: 15, Large: 20, UltraLarge: 25 },
        17: { Compact: 6, Small: 12, Medium: 18, Large: 24, UltraLarge: 30 },
        18: { Compact: 6, Small: 12, Medium: 18, Large: 24, UltraLarge: 30 },
        19: { Compact: 7, Small: 14, Medium: 21, Large: 28, UltraLarge: 35 },
        20: { Compact: 7, Small: 14, Medium: 21, Large: 28, UltraLarge: 35 },
        21: { Compact: 8, Small: 16, Medium: 24, Large: 32, UltraLarge: 40 },
        22: { Compact: 8, Small: 16, Medium: 24, Large: 32, UltraLarge: 40 },
        23: { Compact: 9, Small: 18, Medium: 27, Large: 35, UltraLarge: 45 },
        24: { Compact: 9, Small: 18, Medium: 27, Large: 35, UltraLarge: 45 },
        25: { Compact: 10, Small: 20, Medium: 30, Large: 40, UltraLarge: 50 },
        26: { Compact: 10, Small: 20, Medium: 30, Large: 40, UltraLarge: 50 },
        27: { Compact: 12, Small: 24, Medium: 36, Large: 48, UltraLarge: 60 },
        28: { Compact: 14, Small: 28, Medium: 42, Large: 52, UltraLarge: 68 },
        29: { Compact: 20, Small: 40, Medium: 60, Large: 80, UltraLarge: 100 },
      };
    
      // Torpedo Specifications
      public readonly TORPEDO_DETAILS: { [frameSize: string]: TorpedoDetails } = {
        None: { volume: 0, palletMass: 0, torpedoMass: 0, palletCost: 0, torpedoCost: 0, gsSpeed: '0' },
        Compact: { volume: 1, palletMass: 1, torpedoMass: 0.25, palletCost: 1000, torpedoCost: 25000, gsSpeed: '18/5K' },
        Small: { volume: 2, palletMass: 2, torpedoMass: 0.5, palletCost: 2000, torpedoCost: 50000, gsSpeed: '16/4K' },
        Medium: { volume: 3, palletMass: 3, torpedoMass: 0.75, palletCost: 3000, torpedoCost: 75000, gsSpeed: '14/3K' },
        Large: { volume: 4, palletMass: 4, torpedoMass: 1, palletCost: 4000, torpedoCost: 100000, gsSpeed: '12/2K' },
        UltraLarge: { volume: 5, palletMass: 5, torpedoMass: 1.25, palletCost: 5000, torpedoCost: 125000, gsSpeed: '10/1K' },
      }

      getRatingBonus(rating: number): number {
        if (rating <= 30) {
            return this.RATING_BONUS[rating] || 0; // Lookup for ratings <= 30
        } else {
            // For ratings > 30, increment by +0.5 per level
            return 80 + (rating - 30) * 0.5;
        }
    }

    getManeuverabilityRating(mass: number): number {
        if (mass > 1000000) {
            return mass / 2; // For masses over 1,000,000
        }

        for (const entry of this.MANEUVERABILITY_UNITS) {
            if (mass <= entry.maxTons) {
                return entry.rating;
            }
        }

        return 0; // Default case if something goes wrong
    }

    getPointDefenseVolumeMass(attacks: number, rating: number): number {
        const attacksRow = this.POINT_DEFENSE_TABLE[attacks];
        if (attacksRow && rating >= 2 && rating <= 8) {
            return attacksRow[rating] || 0; // Return value if valid
        }
        console.warn(`Invalid input: attacks=${attacks}, rating=${rating}`);
        return 0; // 0 for invalid inputs
    }

    getPointDefenseCost(attacks: number, rating: number): number {
        const attacksRow = this.POINT_DEFENSE_COST_TABLE[attacks];
        if (attacksRow && rating >= 2 && rating <= 8) {
            return attacksRow[rating] * 1000000 || 0;
        }
        console.warn(`Invalid input: attacks=${attacks}, rating=${rating}`);
        return 0;
    }

    getElectronicWarfareValues(techLevel: number | string): EWTechLevel {
        const ewValues = this.ELECTRONIC_WARFARE_TABLE[techLevel];
        if (ewValues) {
          return ewValues;
        }
        console.warn(`Tech Level ${techLevel} not found in Electronic Warfare Table.`);
        return { passiveEWMax: 0, activeEWMax: 0 };
    }
    getTractorBeamPower(techLevel: number, frameSize: any): number {
        const frameData = this.TRACTOR_BEAM_TABLE[techLevel];
        return frameData?.[frameSize] ?? 0;
    }

    getTachyonCommRigValues(techLevel: number | string): { range: number; daysPerLY: number } {
        const values = this.TACHYON_COMM_RIG[techLevel];
        return values || {range: 0, daysPerLY: 0};
    }

    getQuantumCommRange(techLevel: number | string): number{
        const range = this.QUANTUM_COMM_RANGES[techLevel];
        return range !== undefined ? range : 0;
    }

    getReactionlessDriveValues(techLevel: number | string): { mass: number; volume: number; crew: number; powerCost: number } {
        const values = this.REACTIONLESS_DRIVE[techLevel];
        return values !== undefined ? values : {mass: 0, volume: 0, crew: 0, powerCost: 0};
    }

    getRIFValues(techLevel: number | string): { tlfVolume: number; tlfCost: number; baseCost: number } {
        const values = this.RIF_CHART[techLevel];
        return values !== undefined ? values : { tlfVolume: 0, tlfCost: 0, baseCost: 0 };
    }
    
    getWarpDriveLevel(techLevel: number): number {
        const warpLevel = this.WARP_DRIVE_CHART[techLevel];
        return warpLevel !== undefined ? warpLevel : 0;
    }

    getFluxDriveTLF(techLevel: number): number {
        const tlf = this.FLUX_DRIVE_TLF[techLevel];
        return tlf !== undefined ? tlf : 0;
    }
    getHyperdriveValues(techLevel: number): { tlf: number; baseCost: number } {
        const values = this.HYPERDRIVE_TLF[techLevel];
        return values !== undefined ? values : { tlf: 0, baseCost: 0 };
    }

    calculateTranslightDisplacement(rating: number): number {
        if (rating < 0) {
          throw new Error('Rating must be 0 or higher.');
        }
    
        if (rating === 0) {
          return 0; // Rating 0
        } else if (rating >= 1 && rating <= 10) {
          return rating; // 1–10: Direct progression
        } else if (rating >= 11 && rating <= 20) {
          return 10 + (rating - 10) * 0.5; // 11–20: 10 + 0.5 * (rating - 10)
        } else if (rating >= 21 && rating <= 30) {
          return 15 + (rating - 20) * 0.25; // 21–30: 15 + 0.25 * (rating - 20)
        } else {
          return 17.5 + (rating - 30) * 0.1; // 31+: 17.5 + 0.1 * (rating - 30)
        }
    }

    getQuantumDriveValues(level: number, techLevel: string | number ): QuantumDriveValues {
        switch (level) {
          case 1:
            return this.LEVEL_1_QUANTUM_DRIVES[techLevel];
          case 2:
            return this.LEVEL_2_QUANTUM_DRIVES[techLevel];
          case 3:
            return this.LEVEL_3_QUANTUM_DRIVES[techLevel];
          default:
            return  {volume: 0,mass: 0, cost: 0};
        }
    }
    getTorpedoRatings(techLevel: number): FrameMarkValues {
        return this.TORPEDO_RATINGS[techLevel] || { Compact: 0, Small: 0, Medium: 0, Large: 0, UltraLarge: 0 };
    }
    
    getTorpedoDetails(frameSize: FrameSize): TorpedoDetails {
        return this.TORPEDO_DETAILS[frameSize];
      }
}