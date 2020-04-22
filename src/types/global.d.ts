declare module "*.css" {
  const content: { [className: string]: string }
  export default content
}

export interface Fluid {
  base64: string
  aspectRatio: number
  src: string
  srcSet: string
  srcWebp: string
  srcSetWebp: string
  sizes: string
}

export interface ChildImageSharp {
  id: string
  fluid: Fluid
}

export interface LocalFile {
  id: string
  childImageSharp: ChildImageSharp
}

export interface Thumbnail {
  src: string
  config_width: number
  config_height: number
}

export interface Dimensions {
  height: number
  width: number
}

export interface Node {
  id: string
  username: string
  likes: number
  caption: string
  comments: number
  localFile: LocalFile
  thumbnails: Thumbnail[]
  dimensions: Dimensions
}

export interface NodeType {
  node: Node
}

export interface GatsbyIgSource {
  allInstaNode: {
    edges: NodeType[]
  }
}
