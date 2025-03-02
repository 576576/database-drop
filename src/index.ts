import { Context, Schema, Session, Tables } from 'koishi'

export const name = 'database-drop'

export interface Config { }

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  ctx.command('ddrop <tableName>')
    .action(async ({ session }, tableName) => {
      console.log(`session: ${session.type}`)
      await ctx.database.drop(tableName as any)
    })
}
