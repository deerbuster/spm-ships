import {Component, OnInit} from '@angular/core';
import {CommonModule, DecimalPipe} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import { Ship } from '../models/ship.models';
import { ArmorBeltOption, EWTechLevel, HullMaterial, PowerSource, ShipType, SuperiorAlloy } from '../models/types';
import { ConstantsService } from '../services/constants.service';

@Component({
  selector: 'app-ship',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatRadioModule
    ],
  providers: [DecimalPipe],
  templateUrl: './ship.component.html',
  styleUrl: './ship.component.css'
})
export class ShipComponent implements OnInit{
  hullMaterials: HullMaterial[] = [];
  superiorAlloys: SuperiorAlloy[] = [];
  armorBeltOptions: ArmorBeltOption[] = [];
  frameSizes: String[] = ['None','Compact','Small','Medium','Large','UltraLarge'];
  ship!: Ship;
  constructor(private decimalPipe: DecimalPipe, private constantsService: ConstantsService) {}

  ngOnInit(): void {
    this.hullMaterials = this.constantsService.HULL_MATERIALS;
    this.superiorAlloys = this.constantsService.SUPERIOR_ALLOYS;
    this.armorBeltOptions = this.constantsService.ARMOR_BELT_OPTIONS;
    this.ship = {
      shipType: 'Space Vehicle',
      modificationType: 'New Construction',
      techLevel: 25,
      mass: 100,
      volume: 300,
      cost: 0,
      crew: {
        technicians: 0,
        general: 0,
        gunneryTechnician: 0,
        gunner: 0,
        pilot: 3,
        additional: 0,
      },
      totalCrew: 3,
      totalPassengers: 0,
      hullMaterial: this.hullMaterials[0],
      superiorAlloy: this.superiorAlloys[0],
      powerNeeds: 0,
      currentMass: 0,
      currentVolume: 0,
      maxAcceleration: 0,
      reinforcement: 0,
      strongPoints: 0,
      hardPoints: 0,
      armorBelt: this.armorBeltOptions[0],
      hits: 0,
      governingBody: 'ISC',
      reactionlessDriveUnits: 1,
      hasRelativeInertialForceGenerator: true,
      armamentTonnage: 0,

      hasTractorBeam: false,
      tractorBeamPower: 0,
      tractorBeamSize: 'None',
      hasMicrofrequencyCommRig: true,
      hasTightBeamCommRig: false,
      hasTachyonCommRig: false,
      hasQuantumCommRig: false,      
      sensorType: 'Basic',
      electronicSurveillance: false,
      passiveEWRating: 0,
      activeEWRating: 0,
      EWOfficers: 0,
      defensiveScreenRating: 0,
      decoys: 0,
      pointDefenseAttacks: 0,
      pointDefenseRating: 0,
      pointDefenseEscort: false,
      maneuverabilityRating: 0,
      powerSource: 'Vacuum Power Generator',
      powerRating: 0,
      fuelMassPerWeek: 0,
      fuelVolumePerWeek: 0,
      lifeSupport: true,
      aiSystem: false,
      aiCrewmembers: 0,
      firstClassStaterooms: 0,
      standardStaterooms: 0,
      lowMilitaryStaterooms: 0,
      cryogenicBerths: 0,
      seating: 0,
      recreationalFacilities: false,
      medicalDispensary: false,
      sickbayCapacity: 0,
      labs: 0,
      labBonus: 0,
      workshop: false,
      workshopCIP: 0,
      securityPersonnel: 0,
      fighterBayMassHeld: 0,
      vehicleBayMassHeld: 0,
      cargoHoldVolume: 0,
      cargoHoldMass: 0,
      atmosphericStreamlining: false,
      submarineStreamlining: false,
      landingGear: false,
      radiationShieldingRating: 0,
      evadeProgramRating: 0,
      predictProgramRating: 0,
      shipFeatures: {
        advancedCombatComputer: false,
        agileCommunicationsSystem: false,
        agileTargetingSystem: false,
        airlockQuantity: 0,
        armoredCockpit: false,
        artificialGravity: false,
        computerTranslator: false,
        cramped: false,
        dockingRingQuantity: 0,
        externalSpeakers: false,
        extremeTemperatureShielding: false,
        gFoceSuppressionSystem: false,
        gpsMappingSystem: false,
        infraredHUD: false,
        loLiteHUD: false,
        meleeWeapon: false,
        plush: false,
        shieldedWeapons: false,
        spacious: false,
        telescopicHUD: false,
        topQualityWeapons: false,
        wellShieldedDrives: false,
      },
    };
    this.updateCost(); // Ensure cost calculations reflect the default selection
  }

  isLinear = false;
  shipTypes: ShipType[] = ['Atmospheric Vehicle','Ground Vehicle','Marine Vehicle','Powered Armor','Space Vehicle','Submarine Vehicle','Walker','Hopper','Combination'];
  techLevels: number[] = Array.from({ length: 15 }, (_, i) => i + 15); // Options from 15 to 29
  totalCostMultiplier: number = 0;
  powerSources: PowerSource[] = ['Fission Reactor', 'Fusion Reactor', 'Matter/Antimatter Reactor', 'Vacuum Power Generator', 'Cosmic Power Generator'];

  shipCostBeforeFeaturesFlaws: number = 0;
  hullMaterialCost: number = 0;
  superiorAlloyCost: number = 0;
  reinforcementCost: number = 0;
  armorBeltCost: number = 0;
  strongPointCost: number = 0;
  hardPointCost: number = 0;
  reactionlessDriveCost: number = 0;
  rifGeneratorCost: number = 0;
  maxHUDBonus: number = 0;

  tractorBeamCost: number = 0;
  tightBeamCommRigCost: number = 0;
  tachyonCommRigCost: number = 0;
  tachyonCommRigRange: number = 0;
  tachyonCommRigDaysLY: number = 0;
  quantumCommRigCost: number = 0;
  quantumCommRigRange: number = 0;
  sensorSuiteCost: number = 0;
  electronicSurveillanceSuiteCost: number = 0;
  passiveEWCost: number = 0;
  activeEWCost: number = 0;
  ewTechLevel!: EWTechLevel;
  defensiveScreenCost: number = 0;
  defensiveScreenBonus: number = 0;
  decoyCost: number = 0;
  pointDefenseCost: number = 0;
  maneuverabilityRatingCost: number = 0;
  maneuverabilityBonus: number = 0;
  powerSourceCost: number = 0;
  crewmemberControlAreaCost: number = 0;
  aiSystemCost: number = 0;
  crewQuartersCost: number = 0;
  lifeSupportCost: number = 0;
  firstClassStateroomCost: number = 0;
  standardStateroomCost: number = 0;
  lowMilitaryStateroomCost: number = 0;
  cryogenicBerthCost: number = 0;
  seatingCost: number = 0;
  recreationalFacilitiesCost: number = 0;
  medicalDispensaryCost: number = 0;
  sickbayCost: number = 0;
  labCost: number = 0;
  workshopCost: number = 0;
  securityStationCost: number = 0;
  fighterBayCost: number = 0;
  vehicleBayCost: number = 0;
  cargoHoldCost: number = 0;
  atmosphericStreamliningCost: number = 0;
  submarineStreamliningCost: number = 0;
  landingGearCost: number = 0;
  radiationShieldingCost: number = 0;
  radiationShieldingBonus: number = 0;
  evadeProgramCost: number = 0;
  predictProgramCost: number = 0;
  evadeProgramBonus: number = 0;
  predictProgramBonus: number = 0;


  updateCost(value?: any): void {
    this.ship.cost = 0;
    this.ship.powerNeeds = 0;
    this.ship.currentMass = 0;
    this.ship.currentVolume = 0;
    this.ship.crew =  {
      technicians: 0,
      general: 0,
      gunneryTechnician: 0,
      gunner: 0,
      pilot: 3,
      additional: 0,
    };
    this.ship.totalCrew = 3;
    this.ship.totalPassengers = 0;
    this.ewTechLevel = this.constantsService.getElectronicWarfareValues(this.ship.governingBody === 'Other' ? this.ship.techLevel : this.ship.governingBody);
    console.clear();
    // Step 2 Mass/Volume
    const volumeMultiplier = this.ship.shipType === 'Submarine Vehicle' ? 2 : 3;
    this.ship.volume = this.ship.mass * volumeMultiplier;

    // Step 3 Hull
    const materialCostMultiplier = this.ship.hullMaterial?.costMultiplier || 1.0;
    const superiorAlloyCostMultiplier = this.ship.superiorAlloy?.costMultiplier || 1.0;
    const materialVolumeFactor = this.ship.hullMaterial.volumeFactor || 0;
    const techLevelCostModifier = this.ship.hullMaterial.techLevel == this.ship.techLevel ? 10 : 1;
    const totalHullCostModifier = materialCostMultiplier * superiorAlloyCostMultiplier;

    this.ship.currentVolume = this.ship.volume * materialVolumeFactor;
    this.ship.currentMass = this.ship.volume / 20;
    console.log('3: Current Mass: ', this.ship.currentMass);
    this.ship.powerNeeds = 0;
    this.hullMaterialCost = this.ship.mass * 100 * totalHullCostModifier * techLevelCostModifier;
    this.superiorAlloyCost = this.hullMaterialCost - (this.ship.mass * 100 * materialCostMultiplier * techLevelCostModifier);
    this.ship.cost = this.hullMaterialCost;
    //TODO: increase minimum tonnage for the % hull maximum, if chosen for Superior Alloy
    this.checkReinforcementNeeds();
    if (this.ship.maxAcceleration > 1) {
      if (this.ship.reinforcement > 0) {
        this.reinforcementCost = this.ship.maxAcceleration * this.ship.reinforcement * this.hullMaterialCost * totalHullCostModifier;
        this.ship.cost += this.reinforcementCost;
      }
    }

    // Step 4 Strong and Hard Points
    const retrofitPointMultiplier: number = this.ship.modificationType === 'Retrofit' ? this.ship.hullMaterial.costMultiplier : 1;
    this.strongPointCost = (this.ship.strongPoints * this.ship.hullMaterial.strongPointCost * retrofitPointMultiplier);
    this.hardPointCost = (this.ship.hardPoints * this.ship.hullMaterial.hardPointCost * retrofitPointMultiplier);
    this.ship.cost += this.strongPointCost + this.hardPointCost;
    this.ship.currentVolume += (this.ship.strongPoints * this.ship.hullMaterial.strongPointVolumeMass);
    this.ship.currentVolume += (this.ship.hardPoints * this.ship.hullMaterial.hardPointVolumeMass);
    this.ship.currentMass += (this.ship.strongPoints * this.ship.hullMaterial.strongPointVolumeMass);
    console.log('4SP: Current Mass: ', this.ship.currentMass);
    this.ship.currentMass += (this.ship.hardPoints * this.ship.hullMaterial.hardPointVolumeMass);
    console.log('4HP: Current Mass: ', this.ship.currentMass);
    // Step 5 Armor Belt
    this.ship.hits = this.ship.mass + this.ship.mass * (this.ship.armorBelt.hitsMultiplier / 100);
    this.ship.currentMass += (this.ship.volume * materialVolumeFactor) * (this.ship.armorBelt.hitsMultiplier / 100);
    console.log('5: Current Mass: ', this.ship.currentMass);
    const sameTechMultiplier = this.ship.techLevel === this.ship.hullMaterial.techLevel ? 10 : 1;
    this.armorBeltCost = this.ship.mass * this.ship.armorBelt.costMultiplier * sameTechMultiplier;
    this.ship.cost += this.armorBeltCost;
    // Step 6  Select Drives
    if (this.ship.reactionlessDriveUnits > 0) {
      const reactionlessDriveData = this.constantsService.getReactionlessDriveValues(this.ship.governingBody === 'Other' ? this.ship.techLevel : this.ship.governingBody);
      const reactionlessDriveThrust = this.ship.mass * this.ship.maxAcceleration;
      this.ship.currentVolume += reactionlessDriveData.volume * reactionlessDriveThrust / 100;
      this.ship.currentMass += reactionlessDriveData.mass * reactionlessDriveThrust / 100;
      console.log('6RD: Current Mass: ', this.ship.currentMass);
      this.ship.crew.technicians += Math.ceil(reactionlessDriveData.crew * reactionlessDriveThrust / 100);
      this.ship.powerNeeds += reactionlessDriveData.powerCost * reactionlessDriveThrust / 100;
      this.reactionlessDriveCost = this.ship.reactionlessDriveUnits * 35000;
      this.ship.cost += this.reactionlessDriveCost;
    } else {
      this.reactionlessDriveCost = 0;
    }
    if (this.ship.hasRelativeInertialForceGenerator) {
      const rifGeneratorData = this.constantsService.getRIFValues(this.ship.governingBody === 'Other' ? this.ship.techLevel : this.ship.governingBody);
      this.ship.currentVolume += this.ship.volume * rifGeneratorData.tlfVolume;
      this.ship.currentMass += this.ship.mass * 0.01;
      console.log('6RG: Current Mass: ', this.ship.currentMass);
      this.rifGeneratorCost = rifGeneratorData.baseCost + this.ship.mass * rifGeneratorData.tlfCost;
      this.ship.cost += this.rifGeneratorCost;
      this.ship.powerNeeds += this.ship.mass / 10000 * this.ship.maxAcceleration;
    } else {
      this.rifGeneratorCost = 0;
    }
    // Step 7  Select FTL Drive
    // Step 8  Select Armaments
    // Step 9  Determine Targeting Bonus
    // Step 10  Select Payload Pallets
    // Step 11  Select Special Ordnance
    // Step 12  Select Melee Value
    // Step 13  Select Tractor Beam Projectors
    if(this.ship.hasTractorBeam) {
      this.ship.tractorBeamPower = this.constantsService.getTractorBeamPower(this.ship.techLevel, this.ship.tractorBeamSize) ;
      this.ship.currentVolume += this.constantsService.TRACTOR_BEAM_VOLUME[this.ship.tractorBeamSize as keyof typeof this.constantsService.TRACTOR_BEAM_VOLUME] || 0;
      this.ship.currentMass += this.constantsService.TRACTOR_BEAM_MASS[this.ship.tractorBeamSize as keyof typeof this.constantsService.TRACTOR_BEAM_MASS] || 0;
      console.log('13: Current Mass: ', this.ship.currentMass);
      this.tractorBeamCost = this.constantsService.TRACTOR_BEAM_COST[this.ship.tractorBeamSize as keyof typeof this.constantsService.TRACTOR_BEAM_COST] || 0;
      this.ship.cost += this.tractorBeamCost;
      this.ship.powerNeeds = this.ship.tractorBeamPower * 5;

    } else {
      this.tractorBeamCost = 0;
    }
    // Step 14  Select Communications Gear
    if (this.ship.hasTightBeamCommRig) {
      this.ship.currentVolume += this.ship.techLevel === 17 ? 1 : 0.1;
      this.ship.currentMass += this.ship.techLevel === 17 ? 1 : 0.1;
      console.log('14TBCR: Current Mass: ', this.ship.currentMass);
      this.tightBeamCommRigCost = this.ship.techLevel === 17 ? 10000 : 1000;
      this.ship.cost += this.tightBeamCommRigCost;
      this.ship.powerNeeds += 1;
    } else {
      this.tightBeamCommRigCost = 0;
    }
    if (this.ship.hasTachyonCommRig) {
      this.ship.currentVolume += this.ship.techLevel === 20 ? 1 : 0.1;
      this.ship.currentMass += this.ship.techLevel === 20 ? 1 : 0.1;
      console.log('14TCR: Current Mass: ', this.ship.currentMass);
      this.tachyonCommRigCost = this.ship.techLevel === 20 ? 200000 : 20000;
      this.ship.cost += this.tachyonCommRigCost;
      this.ship.powerNeeds += 1;
      const tachyonCommRigData = this.constantsService.getTachyonCommRigValues(this.ship.governingBody === 'Other' ? this.ship.techLevel : this.ship.governingBody);
      this.tachyonCommRigRange = tachyonCommRigData.range;
      this.tachyonCommRigDaysLY = tachyonCommRigData.daysPerLY;
    } else {
      this.tachyonCommRigCost = 0;
      this.tachyonCommRigRange = 0;
      this.tachyonCommRigDaysLY = 0;
    }
    if (this.ship.hasQuantumCommRig) {
      this.ship.currentVolume += this.ship.techLevel === 23 ? 0.1 : 0;
      this.ship.currentMass += this.ship.techLevel === 23 ? 0.1 : 0;
      console.log('14QCR: Current Mass: ', this.ship.currentMass);
      this.quantumCommRigCost = this.ship.techLevel === 23 ? 400000 : 40000;
      this.ship.cost += this.quantumCommRigCost;
      this.ship.powerNeeds += 1;
      this.ship.crew.technicians += 3;
      this.quantumCommRigRange = this.constantsService.getQuantumCommRange(this.ship.governingBody === 'Other' ? this.ship.techLevel : this.ship.governingBody);
    } else {
      this.quantumCommRigCost = 0;
      this.quantumCommRigRange = 0;
    }
    // Step 15  Select Sensors
    if (this.ship.electronicSurveillance) {
      this.ship.currentVolume += 0.1;
      this.ship.currentMass += 0.1;
      console.log('15ESS: Current Mass: ', this.ship.currentMass);
      this.electronicSurveillanceSuiteCost = 10000;
      this.ship.cost += this.electronicSurveillanceSuiteCost;
    } else {
      this.electronicSurveillanceSuiteCost = 0;
    }
    if (this.ship.sensorType === 'Basic') {
      this.ship.currentVolume += 0.1;
      this.ship.currentMass += 0.1;
      console.log('15BSS: Current Mass: ', this.ship.currentMass);
      this.sensorSuiteCost = 10000;
      this.ship.cost += this.sensorSuiteCost;
    } else {
      this.ship.currentVolume += 1;
      this.ship.currentMass += 1;
      console.log('15ASS: Current Mass: ', this.ship.currentMass);
      this.sensorSuiteCost = 100000;
      this.ship.cost += this.sensorSuiteCost;
      this.ship.crew.technicians += 3;
      this.ship.powerNeeds += 1;
    }
    // Step 16  Select Electronic Warfare
    if (this.ship.passiveEWRating > 0) {
      this.passiveEWCost = this.ship.passiveEWRating * 10000;
      this.ship.cost += this.passiveEWCost;
    } else {
      this.passiveEWCost = 0;
    }
    if (this.ship.activeEWRating > 0) {
      this.ship.currentVolume += this.ship.activeEWRating * 0.03;
      this.ship.currentMass += this.ship.activeEWRating * 0.01;
      console.log('17AEW: Current Mass: ', this.ship.currentMass);
      this.activeEWCost = this.ship.activeEWRating * 5000;
      this.ship.cost += this.activeEWCost;
      this.ship.powerNeeds += this.ship.activeEWRating;
      this.ship.crew.technicians += this.ship.EWOfficers;
    } else {
      this.activeEWCost = 0;
    }
    // Step 17  Select Defensive Screens
    this.defensiveScreenBonus = this.constantsService.getRatingBonus(this.ship.defensiveScreenRating);
    if (this.ship.defensiveScreenRating > 0) {
      const defensiveScreenTechLevelModifier: number = this.ship.techLevel === 24 ? 10 : 1;
      this.ship.currentVolume += this.ship.volume * 0.003 * this.ship.defensiveScreenRating * defensiveScreenTechLevelModifier;
      this.ship.currentMass += this.ship.mass * 0.003 * this.ship.defensiveScreenRating * defensiveScreenTechLevelModifier;
      console.log('17: Current Mass: ', this.ship.currentMass);
      this.defensiveScreenCost = this.ship.mass * 20 * this.ship.defensiveScreenRating * defensiveScreenTechLevelModifier;
      this.ship.powerNeeds += this.ship.defensiveScreenRating;
      this.ship.crew.technicians += Math.ceil((this.ship.mass * 0.003 * this.ship.defensiveScreenRating * defensiveScreenTechLevelModifier)/10);
      this.ship.cost += this.defensiveScreenCost;
    } else {
      this.defensiveScreenCost = 0;
    }
    // Step 18  Select Decoys
    if (this.ship.decoys > 0) {
      this.ship.currentVolume += 0.5 + this.ship.decoys * 0.1;
      this.ship.currentMass += 0.5 + this.ship.decoys * 0.1;
      console.log('18: Current Mass: ', this.ship.currentMass);
      this.decoyCost = 10000 + this.ship.decoys * 5000;
      this.ship.cost += this.decoyCost;
    } else {
      this.decoyCost = 0;
    }
    // Step 19  Select Point Defense System
    const pointDefenseCostModifier: number = this.ship.pointDefenseEscort ? 10 : 1;
    if (this.ship.pointDefenseAttacks > 0 && this.ship.pointDefenseRating > 0){
      this.ship.currentVolume += this.constantsService.getPointDefenseVolumeMass(this.ship.pointDefenseAttacks, this.ship.pointDefenseRating) * pointDefenseCostModifier;
      this.ship.currentMass += this.constantsService.getPointDefenseVolumeMass(this.ship.pointDefenseAttacks, this.ship.pointDefenseRating) * pointDefenseCostModifier;
      console.log('19: Current Mass: ', this.ship.currentMass);
      this.ship.powerNeeds += this.ship.pointDefenseAttacks * this.ship.pointDefenseRating * pointDefenseCostModifier;
      this.pointDefenseCost = this.constantsService.getPointDefenseCost(this.ship.pointDefenseAttacks, this.ship.pointDefenseRating) * pointDefenseCostModifier;
      this.ship.cost += this.pointDefenseCost;
    } else {
      this.pointDefenseCost = 0;
    }
    
    // Step 20  Select Maneuverability
    const maneuverabilityUnitsPerRating: number = this.constantsService.getManeuverabilityRating(this.ship.mass);
    const maneuverabilityUnitSize: number = this.constantsService.SIZE_OF_MANEUVERABILITY[this.ship.governingBody === 'Other' ? this.ship.techLevel : this.ship.governingBody];
    const maneuverabilityUnits: number = this.ship.maneuverabilityRating > 0 ? maneuverabilityUnitsPerRating * this.ship.maneuverabilityRating : maneuverabilityUnitsPerRating / 10;
    this.maneuverabilityBonus = this.constantsService.getRatingBonus(this.ship.maneuverabilityRating);
    this.ship.currentVolume += maneuverabilityUnitSize * maneuverabilityUnits;
    this.ship.currentMass += maneuverabilityUnitSize * maneuverabilityUnits;
    console.log('20: Current Mass: ', this.ship.currentMass);
    this.maneuverabilityRatingCost = maneuverabilityUnits * 20000;
    this.ship.powerNeeds += maneuverabilityUnits / 2;
    this.ship.cost += this.maneuverabilityRatingCost;
    // Step 21  Select Power Source
    if (this.ship.powerRating > 0) {
      switch (this.ship.powerSource) {
        case 'Chemical Fuels' :

          break;
        case 'Fission Reactor':
          this.ship.currentVolume += 900 + this.ship.powerRating * 0.003;
          this.ship.currentMass += 300 + this.ship.powerRating * 0.003;
          console.log('21FiR: Current Mass: ', this.ship.currentMass);
          this.powerSourceCost = 50000 + this.ship.powerRating * 500;
          this.ship.fuelMassPerWeek = 0;
          this.ship.fuelVolumePerWeek = 0;
          this.ship.crew.technicians += Math.ceil((900 + this.ship.powerRating * 0.003)/100);
          break;
        case 'Fusion Reactor':
          const frDetails = this.constantsService.FUSION_REACTOR[this.ship.techLevel];
          this.ship.currentVolume += this.ship.powerRating * frDetails.volume;
          this.ship.currentMass += this.ship.powerRating * frDetails.mass;
          console.log('21FuR: Current Mass: ', this.ship.currentMass);
          this.ship.fuelVolumePerWeek = this.ship.powerRating * frDetails.fuelMass;
          this.ship.fuelMassPerWeek = this.ship.powerRating * frDetails.fuelVolume;
          this.ship.crew.technicians += Math.ceil(this.ship.powerRating * frDetails.crew);
          this.powerSourceCost = 50000 + this.ship.powerRating * 5000;
          break;
        case 'Matter/Antimatter Reactor':
          const marDetails = this.constantsService.MATTER_ANTIMATTER_REACTOR[this.ship.techLevel];
          this.ship.currentVolume += this.ship.powerRating * marDetails.volume;
          this.ship.currentMass += this.ship.powerRating * marDetails.mass;
          console.log('21MAR: Current Mass: ', this.ship.currentMass);
          this.ship.fuelVolumePerWeek = this.ship.powerRating * marDetails.fuelMass;
          this.ship.fuelMassPerWeek = this.ship.powerRating * marDetails.fuelVolume;
          this.ship.crew.technicians += Math.ceil(this.ship.powerRating * marDetails.crew);
          this.powerSourceCost = 500000 + this.ship.powerRating * 5000;
          break;
        case 'Cosmic Power Generator':
          this.ship.currentVolume += 30;
          this.ship.currentMass += 10;
          console.log('21CPG: Current Mass: ', this.ship.currentMass);
          this.powerSourceCost = 100;
          this.ship.fuelVolumePerWeek = 0;
          this.ship.fuelMassPerWeek = 0;
          break;
        default:
          console.log('Vacuum Power')
          const vpgDetails = this.constantsService.VACUUM_POWER_GENERATOR[this.ship.techLevel];
          this.ship.currentVolume += this.ship.powerRating * vpgDetails.volume;
          this.ship.currentMass += this.ship.powerRating * vpgDetails.mass;
          console.log('21VPG: Current Mass: ', this.ship.currentMass);
          this.ship.crew.technicians += Math.ceil(this.ship.powerRating * vpgDetails.crew);
          this.powerSourceCost = 10000 + this.ship.powerRating * 100;
          this.ship.fuelVolumePerWeek = 0;
          this.ship.fuelMassPerWeek = 0;
          break;
      }
      this.ship.cost += this.powerSourceCost;
    } else {
      this.powerSourceCost = 0;
    }
    // Step 22  Determine Minimum Crew
    const modifiers = this.constantsService.CREW_MODIFIERS[this.ship.techLevel];
    this.ship.crew.general = this.ship.mass * modifiers.general;
    this.ship.totalCrew += this.ship.mass * modifiers.general;
    this.ship.crew.gunneryTechnician = this.ship.armamentTonnage * modifiers.gunnery;
    this.ship.totalCrew += this.ship.armamentTonnage * modifiers.gunnery;
    // Step 23  Determine Crewmember Control Areas
    if ((this.ship.totalCrew - this.ship.crew.general) > 0) {
      this.ship.currentVolume += (this.ship.totalCrew - this.ship.crew.general) * 9;
      this.ship.currentMass += (this.ship.totalCrew - this.ship.crew.general) * 3;
      console.log('23: Current Mass: ', this.ship.currentMass);
      this.crewmemberControlAreaCost = (this.ship.totalCrew - this.ship.crew.general) * 5000;
      this.ship.cost += this.crewmemberControlAreaCost;
    } else {
      this.crewmemberControlAreaCost = 0;
    }
    // Step 24  Select AI Systems
    if (this.ship.aiCrewmembers > 0) {
      //TODO AI Crewmembers???
    }
    if (this.ship.aiSystem) {
      this.aiSystemCost = 10000 + this.ship.mass * 10;
      this.ship.cost += this.aiSystemCost;
    } else {
      this.aiSystemCost = 0;
    }
    // Step 25  Select Crew Quarters
    if (this.ship.totalCrew > 0) {
      this.ship.currentVolume += this.ship.totalCrew * 9;
      this.ship.currentMass += this.ship.totalCrew * 3;
      console.log('25: Current Mass: ', this.ship.currentMass);
      this.crewQuartersCost = this.ship.totalCrew * 500;
    } else {
      this.crewQuartersCost = 0;
    }
    // Step 26  Select Passenger Accommodations
    if (this.ship.firstClassStaterooms > 0) {
      this.ship.currentVolume += this.ship.firstClassStaterooms * 40;
      this.ship.currentMass += this.ship.firstClassStaterooms * 9;
      console.log('26FCS:Current Mass: ', this.ship.currentMass);
      this.firstClassStateroomCost = this.ship.firstClassStaterooms * 1500;
      this.ship.totalPassengers += this.ship.firstClassStaterooms;
      this.ship.cost += this.firstClassStateroomCost;
    } else {
      this.firstClassStateroomCost = 0;
    }
    if (this.ship.standardStaterooms > 0) {
      this.ship.currentVolume += this.ship.standardStaterooms * 30;
      this.ship.currentMass += this.ship.standardStaterooms * 8;
      console.log('26SS:Current Mass: ', this.ship.currentMass);
      this.standardStateroomCost = this.ship.standardStaterooms * 1000;
      this.ship.totalPassengers += this.ship.standardStaterooms;
      this.ship.cost += this.standardStateroomCost;
    } else {
      this.standardStateroomCost = 0;
    }
    if (this.ship.lowMilitaryStaterooms > 0) {
      this.ship.currentVolume += this.ship.lowMilitaryStaterooms * 21;
      this.ship.currentMass += this.ship.lowMilitaryStaterooms * 7;
      console.log('26LMS: Current Mass: ', this.ship.currentMass);
      this.lowMilitaryStateroomCost = this.ship.lowMilitaryStaterooms * 800;
      this.ship.totalPassengers += this.ship.lowMilitaryStaterooms;
      this.ship.cost += this.lowMilitaryStateroomCost;
    } else {
      this.lowMilitaryStateroomCost = 0;
    }
    if (this.ship.cryogenicBerths > 0) {
      this.ship.currentVolume += this.ship.cryogenicBerths * 9;
      this.ship.currentMass += this.ship.cryogenicBerths * 3;
      console.log('26CB: Current Mass: ', this.ship.currentMass);
      this.cryogenicBerthCost = this.ship.cryogenicBerths * 1000;
      this.ship.totalPassengers += this.ship.cryogenicBerths;
      this.ship.cost += this.cryogenicBerthCost;
    } else {
      this.cryogenicBerthCost = 0;
    }
    if (this.ship.seating > 0) {
      this.ship.currentVolume += this.ship.seating * 3;
      this.ship.currentMass += this.ship.seating * 1;
      console.log('26S: Current Mass: ', this.ship.currentMass);
      this.seatingCost = this.ship.seating * 100;
      this.ship.totalPassengers += this.ship.seating;
      this.ship.cost += this.seatingCost;
    } else {
      this.seatingCost = 0;
    }
    // Step 27  Select Life Support
    if (this.ship.lifeSupport) {
      this.ship.currentVolume += (this.ship.totalCrew + this.ship.totalPassengers) * 9;
      this.ship.currentMass += (this.ship.totalCrew + this.ship.totalPassengers) * 3;
      console.log('27: Current Mass: ', this.ship.currentMass);
      this.lifeSupportCost = (this.ship.totalCrew + this.ship.totalPassengers) * 500;
      this.ship.cost += this.lifeSupportCost;
    } else {
      this.lifeSupportCost = 0;
    }
    // Step 28  Determine Recreational Facilities
    if (this.ship.recreationalFacilities) {
      this.ship.currentVolume += this.ship.totalPassengers * 5;
      this.ship.currentMass += this.ship.totalPassengers;
      console.log('28: Current Mass: ', this.ship.currentMass);
      this.recreationalFacilitiesCost = this.ship.totalPassengers * 1000;
      this.ship.cost += this.recreationalFacilitiesCost;
    } else {
      this.recreationalFacilitiesCost = 0;
    }
    // Step 29  Select Medical Dispensary
    if (this.ship.medicalDispensary) {
      this.ship.currentVolume += this.ship.totalCrew + this.ship.totalPassengers;
      this.ship.currentMass += (this.ship.totalCrew + this.ship.totalPassengers) / 2;
      console.log('29: Current Mass: ', this.ship.currentMass);
      this.medicalDispensaryCost = (this.ship.totalCrew + this.ship.totalPassengers) * 200;
      this.ship.cost += this.medicalDispensaryCost;
    } else {
      this.medicalDispensaryCost = 0;
    }
    // Step 30  Select Medical Sick Bay
    if (this.ship.sickbayCapacity > 0) {
      this.ship.currentVolume += 99 + this.ship.sickbayCapacity * 24;
      this.ship.currentMass += 33 + this.ship.sickbayCapacity * 8;
      console.log('30: Current Mass: ', this.ship.currentMass);
      this.sickbayCost = this.ship.sickbayCapacity * 4000;
      this.ship.cost += this.sickbayCost;
    } else {
      this.sickbayCost = 0;
    }
    // Step 31  Select Labs
    if (this.ship.labs > 0) {
      this.ship.currentVolume += this.ship.labBonus * 10 * this.ship.labs;
      this.ship.currentMass += this.ship.labBonus * 3 * this.ship.labs;
      this.labCost = this.ship.labBonus * 10000 * this.ship.labs;
      this.ship.cost += this.labCost;
    } else {
      this.labCost = 0;
    }
    // Step 32  Select Workshop
    if (this.ship.workshop) {
      this.ship.currentVolume += this.ship.volume * 0.03;
      this.ship.currentMass += this.ship.mass * 0.03;
      console.log('32: Current Mass: ', this.ship.currentMass);
      this.workshopCost = this.ship.volume * 0.03 * 100;
      this.ship.cost += this.workshopCost;
      this.ship.workshopCIP = this.ship.volume * 0.03 * 2000;
    } else {
      this.workshopCost = 0;
      this.ship.workshopCIP = 0;
    }
    // Step 33  Select Security Stations
    if (this.ship.securityPersonnel > 0) {
      this.ship.currentVolume += this.ship.securityPersonnel * 2;
      this.ship.currentMass += this.ship.securityPersonnel
      console.log('33: Current Mass: ', this.ship.currentMass);
      this.securityStationCost = this.ship.securityPersonnel * 2000;
      this.ship.cost += this.securityStationCost;
      this.ship.crew.additional += this.ship.securityPersonnel;
      this.ship.totalCrew += this.ship.securityPersonnel;
    } else {
      this.securityStationCost = 0;
    }
    // Step 34  Select Fighter Bays
    if (this.ship.fighterBayMassHeld > 0) {
      this.ship.currentVolume += this.ship.fighterBayMassHeld * 15;
      this.ship.currentMass += this.ship.fighterBayMassHeld * 5;
      console.log('34: Current Mass: ', this.ship.currentMass);
      this.fighterBayCost = this.ship.fighterBayMassHeld * 15 * 50;
      this.ship.cost += this.fighterBayCost;
      this.ship.crew.additional += Math.ceil(this.ship.fighterBayMassHeld / 100);
      this.ship.totalCrew += Math.ceil(this.ship.fighterBayMassHeld / 100);
    } else {
      this.fighterBayCost = 0;
    }
    // Step 35  Select Vehicle Bays
    if (this.ship.vehicleBayMassHeld > 0) {
      this.ship.currentVolume += this.ship.vehicleBayMassHeld * 9;
      this.ship.currentMass += this.ship.vehicleBayMassHeld * 3;
      console.log('35: Current Mass: ', this.ship.currentMass);
      this.vehicleBayCost = this.ship.vehicleBayMassHeld * 9 * 20;
      this.ship.cost += this.vehicleBayCost;
      this.ship.crew.additional += Math.ceil(this.ship.vehicleBayMassHeld / 100);
      this.ship.totalCrew += Math.ceil(this.ship.vehicleBayMassHeld / 100);
    } else {
      this.vehicleBayCost = 0;
    }

    // Step 36  Select Cargo Hold
    if (this.ship.cargoHoldMass > 0){
      this.ship.currentMass += this.ship.cargoHoldMass;
      console.log('36: Current Mass: ', this.ship.currentMass);
    }
    if (this.ship.cargoHoldVolume > 0) {
      this.ship.currentVolume += this.ship.cargoHoldVolume;
      this.cargoHoldCost = this.ship.cargoHoldVolume * 5;
      this.ship.cost += this.cargoHoldCost;
    } else {
      this.cargoHoldCost = 0;
    }
      
    // Step 37  Select Atmospheric Streamlining
    if (this.ship.atmosphericStreamlining){
      this.atmosphericStreamliningCost = this.ship.mass * 50;
      this.ship.cost += this.atmosphericStreamliningCost;
    } else {
      this.atmosphericStreamliningCost = 0;
    }
    // Step 38  Select Submarine Streamlining
    if (this.ship.submarineStreamlining){
      this.submarineStreamliningCost = this.ship.mass * 50;
      this.ship.cost += this.submarineStreamliningCost;
    } else {
      this.submarineStreamliningCost = 0;
    }
    // Step 39  Select Landing Gear
    if (this.ship.landingGear) {
      this.ship.currentVolume += this.ship.volume * 0.05;
      this.ship.currentMass += this.ship.mass * 0.05;
      console.log('39: Current Mass: ', this.ship.currentMass);
      this.landingGearCost = this.ship.mass * 5;
      this.ship.cost += this.landingGearCost;
    } else {
      this.landingGearCost = 0;
    }
    // Step 40  Select Radiation Shielding
    this.radiationShieldingBonus = this.constantsService.getRatingBonus(this.ship.radiationShieldingRating);
    if (this.ship.radiationShieldingRating > 0) {
      this.radiationShieldingCost = this.ship.mass * 39 * this.ship.radiationShieldingRating;
      this.ship.cost += this.radiationShieldingCost;
    } else {
      this.radiationShieldingCost = 0;
    }
    // Step 41  Select Computer Programs
    this.evadeProgramBonus = this.constantsService.getRatingBonus(this.ship.evadeProgramRating);
    this.predictProgramBonus = this.constantsService.getRatingBonus(this.ship.predictProgramRating);
    this.evadeProgramCost = 10000 + this.ship.evadeProgramRating * 5000;
    this.predictProgramCost = 10000 + this.ship.predictProgramRating * 5000;
    this.ship.cost += this.predictProgramCost + this.evadeProgramCost;
    // Step 42  Select Auxiliary Systems
    // Step 43  Select Features and Design Flaws
    this.shipCostBeforeFeaturesFlaws = this.ship.cost;
    let featureCost:number = 0;
    let featurePercentage:number = 0;
    if (this.ship.shipFeatures.advancedCombatComputer) {
      featureCost += 300000;
    }
    if (this.ship.shipFeatures.agileCommunicationsSystem) {
      featureCost += 200000;
    }
    if (this.ship.shipFeatures.agileTargetingSystem) {
      featurePercentage += 5;
    }
    if (this.ship.shipFeatures.airlockQuantity > 0) {
      featureCost += 5000 * this.ship.shipFeatures.airlockQuantity;
    }
    if (this.ship.shipFeatures.armoredCockpit) {
      featurePercentage += 10;
    }
    if (this.ship.shipFeatures.artificialGravity) {
      featureCost += this.ship.techLevel === 22 ? 1000 * this.ship.mass : 100 * this.ship.mass;
    }
    if (this.ship.shipFeatures.computerTranslator) {
      featureCost += 10000;
    }
    if (this.ship.shipFeatures.cramped) {
      featureCost += 0;
    }
    if (this.ship.shipFeatures.dockingRingQuantity > 0) {
      featureCost += 50000 * this.ship.shipFeatures.dockingRingQuantity;
    }
    if (this.ship.shipFeatures.externalSpeakers) {
      featureCost += 1000;
    }
    if (this.ship.shipFeatures.extremeTemperatureShielding) {
      featurePercentage += 100;
    }
    if (this.ship.shipFeatures.gFoceSuppressionSystem) {
      featureCost += 100000 * this.ship.totalCrew;
    }
    if (this.ship.shipFeatures.gpsMappingSystem) {
      featureCost += 50000;
    }
    if (this.ship.shipFeatures.infraredHUD) {
      featureCost += 10000;
    }
    if (this.ship.shipFeatures.loLiteHUD) {
      featureCost += 10000;
    }
    if (this.ship.shipFeatures.meleeWeapon) {
      featureCost += 1000 * this.ship.mass;
    }
    if (this.ship.shipFeatures.plush) {
      featurePercentage += 100;
    }
    if (this.ship.shipFeatures.shieldedWeapons) {
      featurePercentage += 10;
    }
    if (this.ship.shipFeatures.spacious) {
      featureCost += 0;
    }
    if (this.ship.shipFeatures.telescopicHUD) {
      featureCost += 100000;
    }
    if (this.ship.shipFeatures.topQualityWeapons) {
      featurePercentage += 10;
    }
    if (this.ship.shipFeatures.wellShieldedDrives) {
      featurePercentage += 10;
    }



    // Step 44  Determine Final Mass and Volume
    // Step 45  Determine Final Cost
    this.ship.cost += this.shipCostBeforeFeaturesFlaws * (featurePercentage/100);
    this.ship.cost += featureCost;

  }

  checkReinforcementNeeds() {
    if (this.ship.maxAcceleration > 1 && this.ship.hullMaterial) {
      this.ship.reinforcement = this.getReinforcementPercentage()/100;
    }
  }

  getReinforcementPercentage(): number {
    const mass: number = this.ship.mass;
    const category: string = this.ship.hullMaterial.category;

    for (const row of this.constantsService.REINFORCEMENT_TABLE) {
      if (mass <= row.massLimit) {
        const value = row.values[category];
        if (value === '*') {
          this.ship.maxAcceleration = 1;
          return 0; // Limit acceleration
        }
        if (value === '–') {
          console.warn('Impossible for this construction armor type.');
          return -1; // No reinforcement possible
        }
        return typeof value === 'number' ? value : -1;
      }
    }
    return -1; // Default if no match found
  }
  onPointDefenseRatingSliderInput(value: number): void {
    // Snap logic: allow 0 but ensure values jump to 2-8
    if (value !== 0 && value < 2) {
      this.ship.pointDefenseRating = 2; // Snap to 2
    } else if (value > 8) {
      this.ship.pointDefenseRating = 8; // Cap at 8
    } else {
      this.ship.pointDefenseRating = value; // Accept valid values
    }
    this.updateCost();
  }
}