module "client-repository" {
  source = "./modules/ecr-repository"

  name = "${var.app_name}/client"
}

module "server-repository" {
  source = "./modules/ecr-repository"

  name = "${var.app_name}/server"
}
