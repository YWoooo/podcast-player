export class Podcast {
  public feed = new Feed()
  public items: Episode[] = []
}
export class Feed {
  public author = ''
  public description = ''
  public image = ''
  public link = ''
  public title = ''
  public url = ''
}
export class Episode {
  public author = ''
  public categories: string[] = []
  public content = ''
  public description = ''
  public enclosure = new Enclosure()
  public guid = ''
  public link = ''
  public pubDate = ''
  public thumbnail = ''
  public title = ''
}
export class Enclosure {
  public duration = 0
  public length = 0
  public link = ''
  public rating = {
    scheme: '',
    value: ''
  }
  public type = ''
}