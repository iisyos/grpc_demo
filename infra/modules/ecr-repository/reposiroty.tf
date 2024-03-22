resource "aws_ecr_repository" "repository" {
  name = var.name
}

resource "aws_ecr_lifecycle_policy" "expire" {
  repository = aws_ecr_repository.repository.name

  policy = jsonencode({
    rules = [
      {
        rulePriority = 1,
        description  = "Keep latest 10 images",
        selection = {
          tagStatus   = "any",
          countType   = "imageCountMoreThan",
          countNumber = 10
        },
        action = {
          type = "expire"
        }
      }
    ]
  })

}
