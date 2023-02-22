export interface ChargebeePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
