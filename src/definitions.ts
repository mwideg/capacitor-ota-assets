export interface CapacitorOtaAssetsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
