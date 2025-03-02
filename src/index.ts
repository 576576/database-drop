import { Context, Schema, Session, Tables } from 'koishi'

export const name = 'database-drop'

export interface Config { }

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  ctx.command('ddrop <tableName>')
    .action(async ({ session }, tableName) => {
      session.send(`已经dropTable ${tableName}`)
      await ctx.database.drop(tableName as any)
    })
  ctx.command('ddropAll')
    .action(async ({ session }) => {
      session.send(`已经dropTable ALL, 必须重启Koishi`)
      await ctx.database.dropAll()
    })
}
