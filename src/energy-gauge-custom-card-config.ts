import { LovelaceCardConfig } from 'custom-card-helpers';
import { EnergyCardBaseConfig } from './type/energy-card-base-config';

export interface EnergyGaugeCustomCardConfig extends LovelaceCardConfig, EnergyCardBaseConfig {
  entity?: string;
  gauge_type?: string;
  min?: number;
  max?: number;
  unit_of_measurement?: string;
  needle?: boolean;
  severity?: Severities;
  decimals?: number;
  show?: {
    tooltip?: boolean;
    name?: boolean;
    severity?: boolean;
  };
  name?: string;
  tooltip?: string;
  clickable?: boolean;
  energy_consumed: string;
}

export interface Severities {
  green?: number;
  yellow?: number;
  red?: number;
  normal?: number;
}
